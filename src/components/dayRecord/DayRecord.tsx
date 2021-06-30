import React from 'react';
import './DayRecord.scss';

import { useAppSelector } from '../../app/hooks';

const DayRecord: React.FC = () => {
  const selectDiary = useAppSelector((state) => state.list.selectDiary);
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
    return selectDiary.answerList[question].map(
      (answer: string, index: any) => {
        const keyNum = parentIndex.toString() + index.toString();
        return (
          <div className="list_answer" key={keyNum}>
            {answer}
          </div>
        );
      }
    );
  };

  return (
    <>
      {selectDiary ? (
        <div className="day_record_wrap">{renderAnswerList()}</div>
      ) : null}
    </>
  );
};

export default DayRecord;
