import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './SwiperCard.module.css';
import { slides } from '../../../constants/sliderassets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCard = () => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.swiper_container}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        // effect="slide"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        className={styles.swiper_card}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.content}>
              {slide.slide.endsWith('.mp4') || slide.slide.endsWith('.webm') ? (
                <video
                  className={styles.media}
                  src={slide.slide}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  className={styles.media}
                  src={slide.slide}
                  alt="Slide Image"
                  loading="lazy"
                />
              )}
            </div>
          </SwiperSlide>
        ))}

        <div
          className={`${styles.nav_btn} ${styles.prev}`}
          onClick={() => swiperRef.current?.swiper.slidePrev()}>
          <FaAngleLeft />
        </div>
        <div
          className={`${styles.nav_btn} ${styles.next}`}
          onClick={() => swiperRef.current?.swiper.slideNext()}>
          <FaAngleRight />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCard;
