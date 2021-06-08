import React, { useState } from 'react';
import './Emotion.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiHappyAlt, BiAngry, BiSmile, BiMeh, BiSad } from 'react-icons/bi';

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
      <Link to="/question">
        <button className="next_pg_btn">{'>'}</button>
      </Link>
      <div className="emotion_header">
        <div className="emotion_question">Guest, how do you fell today?</div>
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
          <IconContext.Provider value={{ color: '#2c2c2c' }}>
            {renderList(emotion)}
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Emotion;
