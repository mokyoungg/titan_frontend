import React from 'react';
import './DiaryRecordList.scss';
import DiaryRecord from './DiaryRecord';

import { useAppSelector } from '../../app/hooks';

const DiaryList: React.FC = () => {
  const list = useAppSelector((state) => state.diary.list);

  const renderList = () => {
    if (list) {
      return list.map((el, key) => {
        return <DiaryRecord record={el} key={el.id} />;
      });
    } else {
      return null;
    }
  };

  return <div className="diary_list_wrap">{renderList()}</div>;
};

export default DiaryList;
