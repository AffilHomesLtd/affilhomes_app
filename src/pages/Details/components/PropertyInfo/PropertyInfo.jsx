import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './PropertyInfo.module.css';

const PropertyInfo = ({ property }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Header row with expand toggle */}
      <div
        className={styles.header}
        onClick={() => setExpanded(!expanded)}>
        <h2 className={styles.section_title}>Property Details</h2>
        <button className={styles.toggleBtn}>
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/* Always visible preview */}
      <div className={`${styles.property_details} ${styles.preview}`}>
        <div className={styles.detail_row}>
          <span className={styles.label}>Promo Cost:</span>
          <span className={styles.value}>
            ₦{(property.price * 0.7).toLocaleString()}
          </span>
        </div>
        <div className={styles.detail_row}>
          <span className={styles.label}>Cost:</span>
          <span
            className={styles.value}
            style={{ textDecoration: 'line-through' }}>
            ₦{property.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.property_details}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <div className={styles.detail_row}>
              <span className={styles.label}>Default Payment plan:</span>
              <span className={styles.value}>24 months</span>
            </div>

            <div className={styles.detail_row}>
              <span className={styles.label}>First Payment:</span>
              <span className={styles.value}>₦5,000,000.00</span>
            </div>

            <div className={styles.detail_row}>
              <span className={styles.label}>Monthly Payment:</span>
              <span className={styles.value}>₦3,000,000.00</span>
            </div>

            <div className={styles.detail_row}>
              <span className={styles.label}>For:</span>
              <span className={styles.value}>{property.for}</span>
            </div>

            <div className={styles.detail_row}>
              <span className={styles.label}>Status:</span>
              <span className={styles.value}>{property.status}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyInfo;
