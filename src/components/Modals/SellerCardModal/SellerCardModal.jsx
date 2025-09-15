import { motion, AnimatePresence } from 'framer-motion';
import styles from './SellerCardModal.module.css';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaUserTie,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
  exit: {
    y: 40,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25 },
  },
};

const SellerCardModal = ({ seller, onClose, show }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.overlay}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}>
          <motion.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={onClose}>
              <FiX />
            </button>

            {/* Header */}
            <div className={styles.header}>
              <h2>{seller.name}</h2>
              {seller.verification ? (
                <span className={`${styles.badge} ${styles.verified}`}>
                  <FaCheckCircle /> Verified
                </span>
              ) : (
                <span className={`${styles.badge} ${styles.unverified}`}>
                  <FaTimesCircle /> Unverified
                </span>
              )}
            </div>

            {/* Company Info */}
            <div className={styles.section}>
              <FaBuilding className={styles.icon} />
              <div>
                <p className={styles.label}>Company</p>
                <p className={styles.value}>{seller.company}</p>
              </div>
            </div>

            {/* Contact Person */}
            <div className={styles.section}>
              <FaUserTie className={styles.icon} />
              <div>
                <p className={styles.label}>Contact Person</p>
                <p className={styles.value}>{seller.contactPerson}</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className={styles.section}>
              <FaPhone className={styles.icon} />
              <div>
                <p className={styles.label}>Phone</p>
                <a
                  href={`tel:${seller.phone}`}
                  className={styles.value}>
                  {seller.phone}
                </a>
              </div>
            </div>
            <div className={styles.section}>
              <FaEnvelope className={styles.icon} />
              <div>
                <p className={styles.label}>Email</p>
                <a
                  href={`mailto:${seller.email}`}
                  className={styles.value}>
                  {seller.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className={styles.section}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <p className={styles.label}>Address</p>
                <p className={styles.value}>{seller.address}</p>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className={styles.statValue}>{seller.yearsActive}+</p>
                <p className={styles.statLabel}>Years Active</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className={styles.statValue}>{seller.listingsCount}</p>
                <p className={styles.statLabel}>Listings</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className={styles.statValue}>{seller.rating.toFixed(1)}</p>
                <p className={styles.statLabel}>Rating</p>
              </motion.div>
            </div>

            {/* CTA Row */}
            <motion.div
              className={styles.ctaRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}>
              <motion.a
                href={`tel:${seller.phone}`}
                className={`${styles.ctaBtn} ${styles.call}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <FaPhone /> Call
              </motion.a>
              <motion.a
                href={`mailto:${seller.email}`}
                className={`${styles.ctaBtn} ${styles.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <FaEnvelope /> Email
              </motion.a>
              <motion.a
                href={`https://wa.me/${seller.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className={`${styles.ctaBtn} ${styles.whatsapp}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <FaWhatsapp /> WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SellerCardModal;
