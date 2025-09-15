import styles from './PropertiesList.module.css';
import { properties_list } from '../../constants/properties';
import PropertyCard from '../Cards/PropertyCard/PropertyCard';
import { NavLink } from 'react-router-dom';
const PropertiesList = () => {
  return (
    <div className={styles.properties_list}>
      <div className={styles.properties_list_header}>
        <div className={styles.properties_list_header_top}>
          <button>Previous</button>
          <p>Trending Residential</p>
          <button>Next</button>
        </div>
        <div className={styles.properties_list_header_bottom}>
          <p>Promo Package</p>
          <div className={styles.navs}>
            <button>Buy</button>
            <button>Sell</button>
            <button>Rent</button>
            <button>Hotels and Lodge</button>
          </div>
          <NavLink to="/find-property">
            <p>Explore More</p>
          </NavLink>
        </div>
      </div>
      <div className={styles.properties_list_cards}>
        {properties_list.map((property, index) => (
          <PropertyCard
            key={index}
            property={property}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
