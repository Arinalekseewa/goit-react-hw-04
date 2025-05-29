import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    if (!images || images.length === 0) {
      return null;
    }
    

  return (
    <ul className={styles['image-gallery']}>
      {images.map((image) => (
        <li key={image.id}
        className={styles['image-item']}>
          <ImageCard
  src={image.urls.small}
  alt={image.alt_description}
  onClick={() => onImageClick(image)}
/>
        </li>
      ))}
    </ul>
  );
}