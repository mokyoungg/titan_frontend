import React, { useState, useEffect } from 'react';
import './DiaryRecord.scss';

interface DiaryRecordProps {
  record: any;
}

const DiaryRecord: React.FC<DiaryRecordProps> = (props) => {
  const { record } = props;

  return (
    <div className="list_wrap">
      <div className="list_date_box">
        <div className="list_day">{record.dayInfo.day}</div>
        <div className="list_date">{record.dayInfo.today}</div>
      </div>
      <div className="list_content_box">{record.content[0]}</div>
    </div>
  );
};

export default DiaryRecord;
