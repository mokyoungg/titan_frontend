import React, { useState, useEffect, ReactEventHandler } from 'react';
import './DiaryDetail.scss';
import { RouteComponentProps } from 'react-router';
//import { Link } from 'react-router-dom';

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

import { useAppSelector, useAppDispatch } from '../../app/hooks';

const DiaryDetail: React.FC = (props: any) => {
  const { record } = props.location.state;
  console.log(props);

  const questionList = useAppSelector((state) => state.diary.questionList);

  const [answerArr, setAnswerArr] = useState<any>();
  const [answerStr, setAnswerStr] = useState<any>();
  const [edit, setEdit] = useState(false);
  const [loadedList, setLoadedList] = useState<any>();

  useEffect(() => {
    const newAnswerList = arrToString(record.answerList);
    setAnswerArr(record.answerList);
    setAnswerStr(newAnswerList);
    const fetchloadedList = localStorage.getItem('diary_list');
    if (fetchloadedList) {
      const load = JSON.parse(fetchloadedList);
      setLoadedList(load);
    }
  }, []);

  const arrToString = (obj: any) => {
    let result: any = {};
    for (let key in obj) {
      result[key] = obj[key].toString().replaceAll(',', `\n`);
    }
    return result;
  };

  const renderEmotion = (emotion: string) => {
    return (
      <span>
        {emotion === 'great' && <BiHappyAlt />}
        {emotion === 'good' && <BiSmile />}
        {emotion === 'okay' && <BiMeh />}
        {emotion === 'not good' && <BiSad />}
        {emotion === 'not great' && <BiAngry />}
      </span>
    );
  };

  const renderAnswerList = () => {
    return questionList.map((question, index) => {
      return (
        <div className={edit ? `edit_article` : `detail_article`} key={index}>
          <div className="detail_question">{question}</div>
          {question && answerArr && !edit && renderAnswer(question, index)}
          {question && answerStr && edit && renderText(question, index)}
        </div>
      );
    });
  };

  const renderAnswer = (question: any, parentIdx: any) => {
    return answerArr[question].map((answer: string, index: any) => {
      const newKey = parentIdx.toString() + index.toString();
      return (
        <div className="detail_answer" key={newKey}>
          {answer}
        </div>
      );
    });
  };

  const renderText = (question: any, parentIdx: any) => {
    return (
      <textarea
        className="edit_textarea"
        key={parentIdx}
        value={answerStr[question]}
        name={question}
        onChange={handleChange}
      ></textarea>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newAnswerStr = { ...answerStr, [name]: value };
    const newAnswerArr = { ...answerArr, [name]: value.split(`\n`) };
    setAnswerStr(newAnswerStr);
    setAnswerArr(newAnswerArr);
  };

  const handleEdit = () => {
    const newRecord = { ...record, answerList: answerArr };

    const newList = loadedList.map((el: any) => {
      if (el.id == newRecord.id) {
        return newRecord;
      } else {
        return el;
      }
    });

    localStorage.setItem('diary_list', JSON.stringify(newList));
    setEdit(!edit);
  };

  const handleDelete = () => {
    const newList = loadedList.filter((el: any) => el['id'] !== record['id']);
    localStorage.setItem('diary_list', JSON.stringify(newList));
    //history.push('/main');
    //props.history.push('/main');
  };

  return (
    <div className="diary_detail_wrap">
      <button className="edit_btn" onClick={() => handleEdit()}>
        {edit ? `Done` : 'Edit'}
      </button>
      <button className="delete_btn" onClick={() => handleDelete()}>
        Delete
      </button>
      <div className="diary_detail_header">
        <div className="diary_detail_date">{record.date}</div>
        <div className="diary_detail_emotion">
          <IconContext.Provider value={{ color: '#2c2c2c' }}>
            {renderEmotion(record.emotion)}
          </IconContext.Provider>
        </div>
      </div>
      <div className="diary_detail_section">{renderAnswerList()}</div>
    </div>
  );
};

export default DiaryDetail;
