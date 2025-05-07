import React from 'react';
import styles from './TopSellerCard.module.css';
const TopSellerCard = ({ seller }) => {
  return (
    <div
      className={styles.seller_card}>
      <div className={styles.seller_image}>
        <img
          src={seller.image}
          alt={seller.name}
        />
      </div>
      <div className={styles.seller_info}>
        <h2>{seller.name}</h2>
        <p>{seller.title} Seller</p>
      </div>
      <div className={styles.seller_stats}>
        🏠 {seller.properties}+ Properties <br />
        ⏱️ {seller.experience} <br />
        ⭐️ {seller.rating}
      </div>
      <button className={styles.contact_button}>Explore</button>
    </div>
  );
};

export default TopSellerCard;
