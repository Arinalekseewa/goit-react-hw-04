import React from 'react';

export default function LoadMore({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
}