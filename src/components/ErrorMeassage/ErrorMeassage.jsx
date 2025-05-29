import React from 'react';
import styles from "./ErrorMeassage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <p className={styles['error-massage']}>
      {message || 'Something went wrong. Please try again.'}
    </p>
  );
}