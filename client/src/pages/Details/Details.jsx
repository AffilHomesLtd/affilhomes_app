import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { properties_list } from '../../constants/properties';
const Details = () => {
  const { id } = useParams();
  const properties = properties_list.find(
    (property) => property.id.toString() === id
  );
  if (!properties) {
    return (
      <div>
        <p className={styles.id}>No properties found</p>
      </div>
    );
  }
  return (
    <div>
      <p className={styles.id}>{properties.name}</p>
    </div>
  );
};

export default Details;
