import styles from './Countdown.module.css';
import { MdBolt } from 'react-icons/md';
import { checkDateInput, formatTimeLeft } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = ({ targetDate = '2025-09-15T20:00:00', discount }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const ms = checkDateInput(targetDate);
      setTimeLeft(formatTimeLeft(ms));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className={styles.wrapper}>
        <MdBolt className={styles.icon} />
        <span className={styles.expired}>Expired</span>
      </div>
    );
  }

  const parts = [
    { key: 'days', value: timeLeft.days, label: 'd' },
    { key: 'hours', value: timeLeft.hours, label: 'h' },
    { key: 'minutes', value: timeLeft.minutes, label: 'm' },
    { key: 'seconds', value: timeLeft.seconds, label: 's' },
  ].filter((p) => p.value > 0 || p.key === 'seconds'); // always show seconds

  return (
    <motion.div
      className={`${styles.wrapper} ${styles.expiring}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <MdBolt className={styles.icon} />

      <div className={styles.timeBlocks}>
        {parts.map((part) => (
          <div
            key={part.key}
            className={styles.timeBlock}>
            <AnimatePresence mode="wait">
              <motion.span
                key={part.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className={styles.value}>
                {part.value}
              </motion.span>
            </AnimatePresence>
            <span className={styles.label}>{part.label}</span>
          </div>
        ))}
      </div>

      {discount && (
        <motion.span
          className={styles.discount}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}>
          {discount}% OFF
        </motion.span>
      )}
    </motion.div>
  );
};

export default Countdown;
