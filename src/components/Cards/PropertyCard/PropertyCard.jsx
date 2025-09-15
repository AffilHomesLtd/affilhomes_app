/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PropertyCard.module.css';
import { FaNairaSign, FaRegCalendarDays } from 'react-icons/fa6';
import { formatShortPrice } from '../../../utils/formatters';
import { removeLy } from '../../../utils/helpers';
import {
  FaBed,
  FaBath,
  FaCar,
  FaUtensils,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaCartArrowDown,
  FaHandshake,
  FaRulerCombined,
  FaCalendarPlus,
  FaWarehouse,
  FaTools,
  FaLayerGroup,
  FaHeart,
  FaAngleDown,
  FaArrowRight,
} from 'react-icons/fa';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { MdVerified } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import IconText from '../../IconText/IconText';
import seller_img from '../../../assets/images/seller_img.png';
import BuyPropertyModal from '../../../pages/Details/components/BuyPropertyModal/BuyPropertyModal';
const PropertyCard = ({ property }) => {
  const {
    name,
    seller_name,
    details,
    price,
    propertyFor,
    rentPaymentType,
    status,
    interiors,
    image,
    id,
  } = property;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [cardSection, setCardSection] = useState({
    details: false,
    availability: false,
    interiors: false,
  });
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.property_card}>
        <div className={styles.discount}>
          <p>30% off</p>
        </div>
        <div className={styles.seller_user}>
          <div className={styles.seller_img}>
            <img
              src={seller_img}
              alt={seller_name}
            />
            <div className={styles.verified}>
              <MdVerified className={styles.icon} />
            </div>
          </div>
        </div>
        <div
          className={styles.property_card_img_section}
          onClick={() => navigate(`/property/find/details/${id}`)}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.overlay}>
              <FaArrowRight />
              <span>Click to view more details</span>
            </motion.div>
          </AnimatePresence>

          <div className={styles.interiors_section}>
            <div className={styles.interior}>
              <FaBed />
              <span>{interiors.bedroom} Beds</span>
            </div>
            <div className={styles.interior}>
              <FaBath />
              <span>{interiors.toilet} Toilets</span>
            </div>
            <div className={styles.interior}>
              <FaUtensils />
              <span>{interiors.kitchen} Kitchen</span>
            </div>
          </div>
          <img
            src={image.cover}
            alt={name || 'Property image'}
          />
        </div>
        <div className={styles.property_card_info_section}>
          <div className={styles.main_details}>
            <div className={styles.names}>
              <h2>{name}</h2>
              <p className={styles.seller}>{seller_name}</p>
            </div>
            <div className={styles.price_rent_type}>
              <p className={styles.price}>
                <FaNairaSign />
                {formatShortPrice(price)}{' '}
                {rentPaymentType && <>/ {removeLy(rentPaymentType)}</>}
              </p>
              <p className={styles.for}>
                <FaHandshake />
                <span>For: {propertyFor}</span>
              </p>
            </div>
          </div>
          <div className={styles.property_card_other_details}>
            <h3
              onClick={() =>
                setCardSection((prev) => ({
                  ...prev,
                  details: !prev.details,
                }))
              }>
              Details{' '}
              <FaAngleDown
                className={`${styles.icon} ${
                  cardSection.details && styles.rotate
                }`}
              />
            </h3>
            <hr />
            <AnimatePresence>
              {cardSection.details && (
                <div className={styles.details}>
                  <IconText
                    element={'Land Size:'}
                    value={`${details.land_size}sqm`}
                    icon={FaRulerCombined}
                  />
                  <IconText
                    element={'Building Size:'}
                    value={`${details.building_size}sqm`}
                    icon={FaWarehouse}
                    delay={0.1}
                  />
                  <IconText
                    element={'Year Built:'}
                    value={`${details.year_built}`}
                    icon={FaCalendarPlus}
                    delay={0.2}
                  />
                  {details.year_renovated && (
                    <IconText
                      element={'Year Renovated:'}
                      value={`${details.year_renovated}`}
                      icon={FaTools}
                      delay={0.3}
                    />
                  )}
                  <IconText
                    element={'Floor Level:'}
                    value={`${details.floor_level}`}
                    icon={FaLayerGroup}
                    delay={details.year_renovated ? 0.4 : 0.3}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.availability_details}>
            <h3
              onClick={() =>
                setCardSection((prev) => ({
                  ...prev,
                  availability: !prev.availability,
                }))
              }>
              Availability{' '}
              <FaAngleDown
                className={`${styles.icon} ${
                  cardSection.availability && styles.rotate
                }`}
              />
            </h3>
            <hr />
            <AnimatePresence>
              {cardSection.availability && (
                <div className={styles.availabilities}>
                  <IconText
                    element={'Status:'}
                    value={`${status}`}
                  />
                  {propertyFor === 'Rent' && (
                    <IconText
                      element={'Payment Type:'}
                      value={rentPaymentType}
                      icon={FaRegCalendarDays}
                      delay={0.1}
                    />
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.action}>
            <div
              className={styles.favorite}
              onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? <RiHeartFill /> : <RiHeartLine />}
            </div>
            <button
              aria-label="Buy property"
              onClick={() => setShowBuyModal(true)}>
              Buy
            </button>
          </div>
        </div>
      </motion.div>
      <BuyPropertyModal
        property={property}
        onClose={() => setShowBuyModal(false)}
        show={showBuyModal}
      />
    </AnimatePresence>
  );
};

export default PropertyCard;
