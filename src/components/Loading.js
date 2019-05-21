import React from 'react';
import spinner from '../assets/RickSpinner.jpeg';
import styles from './Loader.css';

export default function Loading() {
  return <img className={styles.Loader} src={spinner} />;
}
