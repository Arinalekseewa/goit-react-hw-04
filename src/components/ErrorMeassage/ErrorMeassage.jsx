import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <p style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
      {message || 'Something went wrong. Please try again.'}
    </p>
  );
}