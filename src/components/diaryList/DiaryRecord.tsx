import React, { useState, useEffect } from 'react';
import './DiaryRecord.scss';

import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';

interface DiaryRecordProps {
  record: any;
}

const DiaryRecord: React.FC<DiaryRecordProps> = (props) => {
  const { record } = props;

  const handleClick = () => {
    console.log('record:', record);
  };

  return (
    <div className="list_wrap" onClick={() => handleClick()}>
      <div className="list_date_box">
        <div className="list_day">{record.dayInfo.day}</div>
        <div className="list_date">{record.dayInfo.today}</div>
      </div>
      <Link
        to={{
          pathname: `/diary_detail/${record.id}`,
          state: {
            record: record
          }
        }}
      >
        <div className="list_content_box">
          {record.answerList['오늘의 다짐'][0]}
        </div>
      </Link>
    </div>
  );
};

export default DiaryRecord;
