import React from 'react';

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={src} alt={alt} />
    </div>
  );
}