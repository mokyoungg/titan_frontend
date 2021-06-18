import React, { useState, useEffect, useRef } from 'react';
import './DiarySlider.scss';
import Emotion from './Emotion';
import Question from './Question';
import { IconContext } from 'react-icons';
import { BiCheck, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import { useAppSelector } from '../../app/hooks';

import { Swiper, SwiperSlide } from 'swiper/react';

// swiper/swiper.min.css 를 사용하지 않으면
// 슬라이더에 들어가는 컴포넌트가 세로로 이어져 기능이 구현되지 않는다.
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const DiarySlider: React.FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [prevRef, setPrevRef] = useState<any>();
  const [nextRef, setNextRef] = useState<any>();

  const questionList = useAppSelector((state) => state.diary.questionList);
  const answer = useAppSelector((state) => state.diary.answer);

  useEffect(() => {
    //useState를 사용하지 않으면 ref로 지정해도
    //기능하지 않는다. 이 부분에 대해선 공부가 더 필요하다.
    //react render와 DOM 구조 형성, 라이프사이클에서 이슈가 있는 것같다.
    setPrevRef(navigationPrevRef);
    setNextRef(navigationNextRef);
  }, []);

  const renderQuestion = () => {
    return questionList.map((el: string, index) => {
      return (
        <SwiperSlide key={index}>
          <Question question={el} index={index} />
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        pagination={{ type: 'progressbar' }}
      >
        <SwiperSlide>
          <Emotion />
        </SwiperSlide>
        {renderQuestion()}
        <div className="prev" ref={navigationPrevRef}>
          <BiLeftArrowAlt />
        </div>
        <div className="next " ref={navigationNextRef}>
          <BiRightArrowAlt />
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
