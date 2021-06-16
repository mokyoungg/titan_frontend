import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './DiarySlider.scss';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Emotion from './Emotion';
import Question from './Question';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const DiarySlider: React.FC = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <Emotion />
        </SwiperSlide>
        <SwiperSlide>
          <Question />
        </SwiperSlide>
        <SwiperSlide>
          <Emotion />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DiarySlider;
