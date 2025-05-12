import React from 'react';
import styles from './Home.module.css';
import { FiSearch, FiSliders } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import { SwiperCard, TopSellers } from '../../components/Cards';
import { FaLightbulb } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { PropertiesList } from '../../components';
const Home = () => {
  return (
    <div className={styles.home}>
      {/* <section className={styles.top_section}>
        <div className={styles.search_filter_container}>
          <div className={`${styles.search} ${styles.option}`}>
            <FiSearch />
          </div>
          <div className={`${styles.filter} ${styles.option}`}>
            <FiSliders />
            <p>Filter</p>
          </div>
        </div>
        <div className={styles.customer_service}>
          <div className={styles.slide_text}>
            <span>884 787 099</span>
          </div>
          <div className={styles.text}>
            <RiPhoneFill />
            <span>Customer care service</span>
          </div>
        </div>
      </section> */}
      <SwiperCard />
      <section className={styles.info_slide}>
        <span>
          <FaLightbulb />
        </span>
        <div className={styles.info}>
          <p>
            <b> 5 million properties have been placed on slash price </b>
          </p>
        </div>
        <span>
          <MdVerified />
        </span>
      </section>
      <TopSellers />
      <section>
        <PropertiesList />
      </section>
    </div>
  );
};

export default Home;
