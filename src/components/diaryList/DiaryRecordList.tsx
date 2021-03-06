import React from 'react';
import './DiaryRecordList.scss';
import DiaryRecord from './DiaryRecord';

import { useAppSelector } from '../../app/hooks';

const DiaryRecordList: React.FC = () => {
  const totalList = useAppSelector((state) => state.list.totalList);

  const renderList = () => {
    if (totalList) {
      if (totalList.length === 1) {
        return <DiaryRecord record={totalList[0]} />;
      } else if (totalList.length > 1) {
        const newList = totalList.slice().sort((a, b) => {
          let aNum = parseInt(a.date.replaceAll('-', ''));
          let bNum = parseInt(b.date.replaceAll('-', ''));
          return bNum - aNum;
        });
        return newList.map((el, key) => {
          return <DiaryRecord record={el} key={el.id} />;
        });
      }
    } else {
      return null;
    }
  };

  return <div className="diary_list_wrap">{renderList()}</div>;
};

export default DiaryRecordList;

// return list.map((el, key) => {
//   return <DiaryRecord record={el} key={el.id} />;
// });
