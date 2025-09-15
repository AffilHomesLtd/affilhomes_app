import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styles from './BuyPropertyModal.module.css';

const plans = [
  { key: 'once', label: 'One-time', months: 1 },
  { key: '6m', label: '6 months', months: 6 },
  { key: '12m', label: '12 months', months: 12 },
  { key: '24m', label: '24 months', months: 24 },
];

const BuyPropertyModal = ({ property, onClose, show }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const promoPrice = property.price * 0.7;

  const calculatePayment = () => {
    if (!selectedPlan) return null;
    if (selectedPlan.months === 1) {
      return { total: promoPrice, monthly: null };
    }
    return {
      total: promoPrice,
      monthly: promoPrice / selectedPlan.months,
    };
  };

  const payment = calculatePayment();
  if (!show) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}>
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}>
          <FiX />
        </button>

        <h2 className={styles.title}>Buy Property</h2>

        {/* Plan selection */}
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <button
              key={plan.key}
              className={`${styles.planCard} ${
                selectedPlan?.key === plan.key ? styles.active : ''
              }`}
              onClick={() => setSelectedPlan(plan)}>
              {plan.label}
            </button>
          ))}
        </div>

        {/* Payment preview */}
        {payment && (
          <div className={styles.paymentSummary}>
            <p>
              <span>Total:</span> ₦{payment.total.toLocaleString()}
            </p>
            {payment.monthly && (
              <p>
                <span>Monthly:</span> ₦{payment.monthly.toLocaleString()}
              </p>
            )}
          </div>
        )}

        {/* Terms & conditions */}
        <div className={styles.terms}>
          <button
            type="button"
            className={styles.readTerms}
            onClick={() => setShowTerms(true)}>
            Read Terms & Conditions
          </button>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the Terms & Conditions
          </label>
        </div>

        {/* CTA */}
        <button
          className={styles.buyBtn}
          disabled={!selectedPlan || !agreed}>
          Buy Now
        </button>
      </motion.div>

      {/* Terms Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            className={styles.termsModal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}>
            <div className={styles.termsContent}>
              <h3>Terms & Conditions</h3>
              <p>
                By purchasing this property, you agree to comply with the
                payment plan chosen. All payments must be made on schedule.
                Failure to meet payment deadlines may result in penalties or
                cancellation. Additional legal and property transfer fees may
                apply. Kindly note that affilhomes has it's own set policies and
                roles that regulates this service. and these policies covers our
                service fee sub-charge and many others.
              </p>
              <button
                className={styles.closeTerms}
                onClick={() => setShowTerms(false)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuyPropertyModal;
