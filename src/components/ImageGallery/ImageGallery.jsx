import { Linter } from 'eslint';
import React from 'react';
//import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    if (!images || images.length === 0) {
        return null;
    }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
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