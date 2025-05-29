import React from 'react';
import styles from "./Loader.module.css";
import { ClipLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className={styles['loader']}>
            <ClipLoader />
        </div>
    )
}