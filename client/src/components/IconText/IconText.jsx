import React from 'react';
import styles from './IconText.module.css';
import { MdOutlineHomeWork } from 'react-icons/md';
import { motion } from 'framer-motion';
import {
  FaCartArrowDown,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from 'react-icons/fa';

const IconText = ({
  icon: Icon = MdOutlineHomeWork,
  element,
  value,
  delay,
  className,
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay,
      }}
      className={styles.detail}>
      {element === 'Status:' ? (
        <>
          {value === 'Available' && <FaCheckCircle />}
          {value === 'Sold' && <FaCartArrowDown />}
          {value === 'Closed' && <FaTimesCircle />}
          {value === 'Upcoming' && <FaClock />}
        </>
      ) : (
        <Icon />
      )}

      <span>
        {element} {value}
      </span>
    </motion.p>
  );
};

export default IconText;
