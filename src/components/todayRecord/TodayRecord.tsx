import React from 'react';
import './TodayRecord.scss';

import { useAppSelector } from '../../app/hooks';

const TodayRecord: React.FC = () => {
  const selectList = useAppSelector((state) => state.list.selectList);
  const questionList = useAppSelector((state) => state.diary.questionList);

  const renderAnswerList = () => {
    return questionList.map((question, index) => {
      return (
        <div className="answer_list_container" key={index}>
          <div className="list_question">{question}</div>
          {/* {selectList.answerList[question].map((answer: string) => {
            return <div>{answer}</div>;
          })} */}
          {question && renderAnswer(question, index)}
        </div>
      );
    });
  };

  const renderAnswer = (question: string, parentIndex: any) => {
    //console.log(typeof parentIndex);
    //console.log('parentIndex', parentIndex);
    return selectList.answerList[question].map((answer: string, index: any) => {
      const keyNum = parentIndex.toString() + index.toString();
      return (
        <div className="list_answer" key={keyNum}>
          {answer}
        </div>
      );
    });
  };

  return (
    <>
      {selectList ? (
        <div className="today_record_wrap">
          {/* <ul className="question">
            오늘의 다짐
            <li className="answer_li">하하하</li>
          </ul> */}
          {renderAnswerList()}
        </div>
      ) : null}
    </>
  );
};

export default TodayRecord;
