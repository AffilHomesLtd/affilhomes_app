import { FiImage } from 'react-icons/fi';
import React from 'react';
import styles from './ImageLoader.module.css';
const ImageLoader = () => {
  return (
    <div className={styles.loader_wrap}>
      <div className={styles.loader}></div>
      <FiImage />
    </div>
  );
};

export default ImageLoader;
