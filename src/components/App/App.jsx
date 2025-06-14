import { useState, useEffect, useRef } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMeassage/ErrorMeassage";
import LoadMore from "../LoadMore/LoadMore";
import ImageModal from "../ImageModal/ImageModal";

const ACCESS_KEY = 'zT7iurgOs4_wWfKlD0Z4NaERRPNbOdVeoV2UmNzaHyA';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const fetchImages = async (searchQuery, pageNumber) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${pageNumber}&per_page=12&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) throw new Error('Failed to fetch images.');

      const data = await response.json();
      const newImages = data.results;

      setImages(prev =>
        pageNumber === 1 ? newImages : [...prev, ...newImages]
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
    fetchImages(searchTerm, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);


  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <LoadMore onClick={handleLoadMore} />
          )}
        </>
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
        modalRef={modalRef}
      />
    </div>
  );
}
