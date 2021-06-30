import React, { useState, useEffect } from 'react';
import './Question.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IconContext } from 'react-icons';
import { BiCheck } from 'react-icons/bi';

import writeDiary from '../../features/diary/writeDiary';

interface QuestionComponentProps extends RouteComponentProps<any> {
  question: any;
  index: number;
} //= RouteComponentProps;

//history와 부모 컴포넌트에서 내려오는 props를 같이 사용하려면
//(props, {history}) 가 아닌 props로 전부를 받아와 사용해야한다.
//(props, {history}) 형태의 경우, 두번째 인자의 값을 undefined로 받음.
const Question: React.FC<QuestionComponentProps> = (props) => {
  const { value, applyEnter, handleChange, postDiary } = writeDiary(props);

  return (
    <div className="question_wrap">
      <div className="question_header_section">
        <p>{props.question}</p>
      </div>
      <div className="question_answer_section">
        <textarea
          className="answer"
          value={value}
          onChange={handleChange}
          onKeyUp={applyEnter}
        ></textarea>
      </div>
      {props.index === 2 && (
        <div className="complete_btn" onClick={() => postDiary()}>
          <IconContext.Provider value={{ color: '#000' }}>
            <BiCheck />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default withRouter(Question);
