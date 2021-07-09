import React from 'react';
import './DiaryDetail.scss';

import { IconContext } from 'react-icons';
import {
  BiHappyAlt,
  BiAngry,
  BiSmile,
  BiMeh,
  BiSad,
  BiTrash,
  BiEditAlt,
  BiCheck,
  BiX
} from 'react-icons/bi';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import editDiary from '../../features/diary/editDiary';

const DiaryDetail: React.FC = (props: any) => {
  const {
    answerArr,
    answerStr,
    edit,
    handleChange,
    handleEdit,
    handleDelete,
    handlePage
  } = editDiary(props);
  const { record } = props.location.state;

  const questionList = useAppSelector((state) => state.diary.questionList);

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

  return (
    <div className="diary_detail_wrap">
      <div className="diary_detail_header">
        <div className="diary_detail_date">{record.date}</div>
        <div className="detail_btn_container">
          <button className="edit_btn" onClick={() => handleEdit()}>
            <BiEditAlt />
            {edit ? `Done` : 'Edit'}
          </button>
          <button className="delete_btn" onClick={() => handleDelete()}>
            <BiTrash />
            Delete
          </button>
        </div>
      </div>
      <div className="diary_detail_emotion">
        I feel...
        <IconContext.Provider value={{ color: '#2c2c2c' }}>
          {renderEmotion(record.emotion)}
        </IconContext.Provider>
      </div>
      <div className="diary_detail_section">{renderAnswerList()}</div>
      <div className="diary_detail_footer">
        <button className="confirm_btn" onClick={() => handlePage()}>
          <BiCheck />
        </button>
      </div>
    </div>
  );
};

export default DiaryDetail;
