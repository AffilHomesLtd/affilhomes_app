import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { properties_list } from '../../constants/properties';
const Details = () => {
  const [imageIndex, setImageIndex] = useState('cover');
  const { id } = useParams();
  const properties = properties_list.find(
    (property) => property.id.toString() === id
  );
  const { cover, preview } = properties.image;
  const images = preview.map((src, index) => ({ src, id: `preview_${index}` }));
  const coverImage = { src: cover, id: 'cover' };
  const midIndex = Math.floor(images.length / 2);
  images.splice(midIndex, 0, coverImage);

  const activeImage = images.find(({ id }) => id === imageIndex);

  if (!properties) {
    return (
      <div>
        <p className={styles.id}>No properties found</p>
      </div>
    );
  }
  const test = () => {
    console.log(images);
    console.log(images.length);
  };
  const imageList = images;
  return (
    <div className={styles.details}>
      <div
        className={styles.preview}
        onClick={test}>
        <div className={styles.preview_gallery}>
          <div className={styles.gallery_header}>
            <p className={styles.for}>For {properties.for}</p>
            <button>More Details</button>
          </div>
          <div className={styles.gallery_images}>
            <div className={styles.image_preview}>
              <p className={styles.view_type}>
                {imageIndex.split('_')[1] === '0'
                  ? imageIndex.split('_')[0]
                  : imageIndex}
              </p>
              <img
                src={activeImage.src}
                alt={properties.name}
              />
            </div>
            <div className={styles.image_list}>
              {imageList.map((img) => (
                <div
                  className={`${styles.image} ${
                    imageIndex === img.id ? styles.active : ''
                  }`}>
                  <img
                    key={img.id}
                    src={img.src}
                    alt={properties.name}
                    onClick={() => setImageIndex(img.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.preview_info}></div>
        </div>
        <div className={styles.preview_interiors}>
          Bed {properties.interiors.bedroom}
        </div>
      </div>
    </div>
  );
};

export default Details;
