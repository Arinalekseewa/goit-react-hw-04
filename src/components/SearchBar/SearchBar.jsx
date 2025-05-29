import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from "./SearchBar.module.css";

export default function SearchBar ({ onSubmit })  {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedValue = inputValue.trim();

        if (trimmedValue === '') {
            toast.error('Please enter a search term to find images:)');
            return;
        }

        onSubmit(trimmedValue);
    };

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles['form']}>
        <input
          className={styles['form-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}