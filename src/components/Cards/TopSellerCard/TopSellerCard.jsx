import React, { useState } from 'react';
import styles from './TopSellerCard.module.css';
import { MdMenu, MdVerified } from 'react-icons/md';
import { FaClock, FaHome, FaStar } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
const TopSellerCard = ({
  image,
  name,
  title,
  properties,
  experience,
  rating,
  id,
}) => {
  const [cardIndex, setCardIndex] = useState(null);
  const [isCardActive, setIsCardActive] = useState(false);
  const handleCardActive = () => {
    setIsCardActive(!isCardActive);
    setCardIndex(id);
  };
  const handleCardInActive = () => {
    setIsCardActive(false);
  };
  return (
    <div
      className={styles.seller_card}
      onMouseEnter={handleCardActive}
      onMouseLeave={handleCardInActive}>
      <div
        className={styles.menu}
        onClick={handleCardActive}>
        <MdMenu />
      </div>
      <div className={styles.verified_icon}>
        <MdVerified />
      </div>
      <AnimatePresence>
        {isCardActive && cardIndex === id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className={styles.blur}></motion.div>
        )}
      </AnimatePresence>
      <div className={styles.seller_image}>
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className={styles.seller_info}>
        <h2>{name}</h2>
        <p>{title} Seller</p>
      </div>
      <AnimatePresence>
        {isCardActive && cardIndex === id && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{
              opacity: 1,
              y: 0,
              x: '-50%',
              transition: { delay: 0.2 },
            }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            // transition={{ delay: 0.2 }}
            className={styles.seller_stats}>
            <p>
              <FaHome />
              {properties}+ Properties
            </p>
            <p>
              <FaClock />
              {experience}yrs exp
            </p>
            <p>
              <FaStar /> {rating}
            </p>
            <button>Explore</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopSellerCard;
