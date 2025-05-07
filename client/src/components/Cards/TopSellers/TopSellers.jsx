import React, { useEffect, useRef, useState } from 'react';
import styles from './TopSellers.module.css';
import { topSellers } from '../../../constants/topSellers';
import TopSellerCard from '../TopSellerCard/TopSellerCard';
import { MdWorkspacePremium } from 'react-icons/md';

const TopSellers = () => {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = right, -1 = left

  const scrollContainer = scrollRef.current;
  useEffect(() => {
    const scrollSpeed = 3; // pixels per interval
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;

        // Check if reached either end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth <=
            scrollContainer.scrollWidth ||
          scrollContainer.scrollLeft <= 0
        ) {
          setScrollDirection((prev) => -prev); // reverse direction
        }
      }
    }, 10); // controls speed (lower is faster)
    console.log(scrollContainer.scrollLeft + scrollContainer.clientWidth);
    console.log(scrollContainer.scrollWidth);

    return () => clearInterval(interval); // clean up
  }, [scrollDirection]);

  return (
    <section className={styles.top_sellers_wrapper}>
      <div className={styles.top_sellers_header}>
        <MdWorkspacePremium size={24} />
        <p>Top Property Sellers</p>
      </div>
      <div className={styles.top_sellers_container}>
        <div
          className={styles.top_sellers}
          ref={scrollRef}>
          {topSellers.map((seller) => (
            <TopSellerCard
              key={seller.id}
              seller={seller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
