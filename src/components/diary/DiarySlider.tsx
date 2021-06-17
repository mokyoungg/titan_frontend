import React, { useState, useEffect, useRef } from 'react';
import './DiarySlider.scss';
import Emotion from './Emotion';
import Question from './Question';
import { IconContext } from 'react-icons';
import { BiCheck } from 'react-icons/bi';

import { useAppSelector } from '../../app/hooks';

import { Swiper, SwiperSlide } from 'swiper/react';

// swiper/swiper.min.css 를 사용하지 않으면
// 슬라이더에 들어가는 컴포넌트가 세로로 이어져 기능이 구현되지 않는다.
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

const DiarySlider: React.FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [prevRef, setPrevRef] = useState<any>();
  const [nextRef, setNextRef] = useState<any>();

  useEffect(() => {
    //useState를 사용하지 않으면 ref로 지정해도
    //기능하지 않는다. 이 부분에 대해선 공부가 더 필요하다.
    //react render와 DOM 구조 형성, 라이프사이클에서 이슈가 있는 것같다.
    setPrevRef(navigationPrevRef);
    setNextRef(navigationNextRef);
  }, []);

  const questionList = useAppSelector((state) => state.diary.questionList);

  const renderQuestion = () => {
    return questionList.map((el: string, index) => {
      return (
        <SwiperSlide key={index}>
          <Question question={el} />
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        //slidesPerColumnFill="row"

        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
          //hideOnClick: true
          //hiddenClass: 'swiper-button-hidden'
        }}

        //onSwiper={(swiper) => console.log('swiper', swiper)}
        //onSlideChange
        // onNavigationHide={(swiper) => {
        //   if (swiper.activeIndex == 0) {
        //   }
        // }}
        //onNavigationShow={(swiper) => console.log(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Emotion />
        </SwiperSlide>
        {renderQuestion()}
        <div className="prev" ref={navigationPrevRef}>
          <BiCheck />
        </div>
        <div className="next " ref={navigationNextRef}>
          <BiCheck />
        </div>
      </Swiper>
    </>
  );
};

export default DiarySlider;

{
  /* <div 
ref={el => { console.log(el); observed.current = el; }} // or setState(el)
className="App"
> */
}
