import React, { useEffect, useState } from 'react';
import styles from './TopSellers.module.css';
import { topSellers } from '../../../constants/topSellers';
import TopSellerCard from '../TopSellerCard/TopSellerCard';
import { MdWorkspacePremium } from 'react-icons/md';

const TopSellers = () => {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    setSlide([...topSellers, ...topSellers]);
  }, [topSellers]);
  return (
    <section className={styles.top_sellers_wrapper}>
      <div className={styles.top_sellers_header}>
        <MdWorkspacePremium />
        <p>Verified Sellers</p>
      </div>
      <div className={styles.top_sellers_container}>
        <div className={styles.top_sellers}>
          {slide?.map((seller, index) => (
            <TopSellerCard
              key={index}
              id={index}
              name={seller.name}
              title={seller.title}
              experience={seller.experience}
              properties={seller.properties}
              image={seller.image}
              rating={seller.rating}
              seller={seller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
