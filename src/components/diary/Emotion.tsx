import React, { useState } from 'react';
import './Emotion.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {
  BiHappyAlt,
  BiAngry,
  BiSmile,
  BiMeh,
  BiSad,
  BiXCircle,
  BiX
} from 'react-icons/bi';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { handleEmotion } from '../../features/diary/diarySlice';

const Emotion: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentEmotion = useAppSelector((state) => state.diary.emotion);

  const [emotion, setEmotion] = useState<string[]>([
    'great',
    'good',
    'okay',
    'not good',
    'not great'
  ]);

  const renderList = (arr: string[]) => {
    return arr.map((el, index) => {
      return (
        <span
          className="emotion_el"
          key={index}
          onClick={() => dispatch(handleEmotion(el))}
        >
          {el === 'great' && <BiHappyAlt />}
          {el === 'good' && <BiSmile />}
          {el === 'okay' && <BiMeh />}
          {el === 'not good' && <BiSad />}
          {el === 'not great' && <BiAngry />}
        </span>
      );
    });
  };

  return (
    <div className="emotion_wrap">
      {/* <div className="progress_bar">
        <div className="current_progress"></div>
      </div> */}
      <div className="emotion_header">
        <div className="emotion_question">Guest, how do you feel today?</div>
      </div>
      <div className="emotion_section">
        <div className="emotion_icon">
          <IconContext.Provider
            value={{ color: '#2c2c2c', className: 'main_icon' }}
          >
            {renderList([currentEmotion])}
          </IconContext.Provider>
        </div>
        <div className="emotion_text">{currentEmotion}</div>
      </div>
      <div className="emotion_selection">
        <div className="emotion_arr">
          <IconContext.Provider value={{ color: '#000' }}>
            {renderList(emotion)}
          </IconContext.Provider>
        </div>
      </div>
      <div className="cancel_btn">
        <IconContext.Provider value={{ color: '#000' }}>
          <BiX />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Emotion;
