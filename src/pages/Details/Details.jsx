import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import { properties_list } from '../../constants/properties';
import Countdown from '../../components/Countdown/Countdown';
import {
  LuBath,
  LuBed,
  LuCarTaxiFront,
  LuCookingPot,
  LuMapPinHouse,
} from 'react-icons/lu';
import { motion } from 'framer-motion';
import SellerCardModal from '../../components/Modals/SellerCardModal/SellerCardModal';
import PropertyInfo from './components/PropertyInfo/PropertyInfo';
import BuyPropertyModal from './components/BuyPropertyModal/BuyPropertyModal';

const Details = () => {
  const [imageIndex, setImageIndex] = useState('cover');
  const { id } = useParams();
  const property = properties_list.find(
    (property) => property.id.toString() === id
  );

  const [showSeller, setShowSeller] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const seller = {
    id: '76885893',
    name: 'Lekki County Homes Ltd.',
    contactPerson: 'Mr. Adewale Johnson',
    phone: '+234 801 234 5678',
    email: 'info@lekkicountyhomes.com',
    address: 'Ikota Villa Estate, Lekki, Lagos',
    company: 'Lekki County Homes',
    category: 'Real Estate Developer',
    yearsActive: 12,
    verification: true,
    rating: 4.6,
    listingsCount: 58,
  };

  if (!property) {
    return (
      <div>
        <p className={styles.id}>No property found</p>
      </div>
    );
  }

  const { cover, preview } = property.image;
  const images = preview.map((src, index) => ({ src, id: `preview_${index}` }));
  const coverImage = { src: cover, id: 'cover' };
  const midIndex = Math.floor(images.length / 2);
  images.splice(midIndex, 0, coverImage);
  const activeImage = images.find(({ id }) => id === imageIndex);

  return (
    <div className={styles.details}>
      {/* Left: Gallery */}
      <motion.div
        className={styles.preview}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <div className={styles.preview_gallery}>
          <div className={styles.gallery_header}>
            <p className={styles.for}>For {property.for}</p>
            <button onClick={() => setShowSeller(true)}>View Seller</button>
            <SellerCardModal
              show={showSeller}
              onClose={() => setShowSeller(false)}
              seller={seller}
            />
          </div>

          <div className={styles.gallery_images}>
            <motion.div
              key={activeImage.id}
              className={styles.image_preview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <p className={styles.view_type}>
                {imageIndex === 'cover' ? 'cover' : imageIndex}
              </p>
              <img
                src={activeImage.src}
                alt={property.name}
              />
            </motion.div>

            <div className={styles.image_list}>
              {images.map((img) => (
                <motion.div
                  key={img.id}
                  className={`${styles.image} ${
                    imageIndex === img.id ? styles.active : ''
                  }`}
                  whileHover={{ scale: 1.05 }}>
                  <img
                    src={img.src}
                    alt={property.name}
                    onClick={() => setImageIndex(img.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <motion.div
          className={styles.preview_info}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <Countdown discount="30" />
          <h2 className={styles.property_name}>{property.name}</h2>
          <p className={styles.property_location}>
            <LuMapPinHouse />
            {property.location}
          </p>
          <PropertyInfo property={property} />
          <button
            className={styles.buy_now}
            onClick={() => setShowBuyModal(true)}>
            Buy Now
          </button>
        </motion.div>
      </motion.div>

      {/* Interiors */}
      <motion.div
        className={styles.preview_interiors}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}>
        {[
          {
            icon: <LuBed />,
            count: property.interiors.bedroom,
            label: 'Bedrooms',
          },
          {
            icon: <LuCookingPot />,
            count: property.interiors.kitchen,
            label: 'Kitchen',
          },
          {
            icon: <LuBath />,
            count: property.interiors.toilet,
            label: 'Bathrooms',
          },
          {
            icon: <LuCarTaxiFront />,
            count: property.interiors.parking_garage,
            label: 'Parking',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={styles.interior_info}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}>
            {item.icon}
            <span className={styles.count}>{item.count}</span>
            <span className={styles.label}>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
      <BuyPropertyModal
        property={property}
        onClose={() => setShowBuyModal(false)}
        show={showBuyModal}
      />
    </div>
  );
};

export default Details;
