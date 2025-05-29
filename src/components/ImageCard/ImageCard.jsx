import React from 'react';
import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div onClick={onClick} className={styles['image']}>
      <img src={src} alt={alt} />
    </div>
  );
}