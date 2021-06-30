import React, { useEffect, useState } from 'react';
import './DayInfo.scss';
import { Link } from 'react-router-dom';
import DayRecord from '../dayRecord/DayRecord';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useDate from '../../features/date/useDate';
import { handleSelectDiary } from '../../features/fetchList/fetchListSlice';

const DayInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((state) => state.date.selectDate);
  const totalList = useAppSelector((state) => state.list.totalList);

  const { getDate, dateInfo } = useDate();

  const [dayCheck, setDayCheck] = useState<boolean>(false);

  useEffect(() => {
    getDate(currentDate);

    if (totalList) {
      for (let i = 0; i < totalList.length; i++) {
        if (totalList[i].date === currentDate) {
          dispatch(handleSelectDiary(totalList[i]));
          setDayCheck(true);
          break;
        } else {
          dispatch(handleSelectDiary({}));
          setDayCheck(false);
        }
      }
    }
  }, [currentDate, totalList]);

  return (
    // <>
    // {!dayCheck ? (
    <div className="day_info_wrap">
      {/* <Link to="/diary" style={{ textDecoration: 'none', width: '100%' }}> */}
      <div className="date_section">
        <div className="today">
          {dateInfo.today < 10 ? `0${dateInfo.today}` : `${dateInfo.today}`}
        </div>
        <div className="day_info">
          <div className="month">
            {dateInfo.day}/{dateInfo.month}
          </div>
          <div className="other_day">
            {dateInfo.tomorrow < 10
              ? `0${dateInfo.tomorrow}`
              : `${dateInfo.tomorrow}`}
            {dateInfo.dayAfterTomorrow < 10
              ? `0${dateInfo.dayAfterTomorrow}`
              : `${dateInfo.dayAfterTomorrow}`}
          </div>
        </div>
      </div>
      {!dayCheck ? (
        <Link to="/diary" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="start_section">
            Start
            <br /> Today's Diary
          </div>
        </Link>
      ) : (
        <DayRecord />
      )}
    </div>
    // ) : (
    //   <TodayRecord />
    // )}
    // {/* </> */}
  );
};

export default DayInfo;
