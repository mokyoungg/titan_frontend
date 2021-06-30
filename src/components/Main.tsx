import React, { useEffect, useState } from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

import CalendarIcon from './icons/CalendarIcon';

import DayInfo from './dayInfo/DayInfo';
import DiaryRecordList from '../components/diaryList/DiaryRecordList';
import ReactDayPicker from './calendar/ReactDayPicker';
import Quotes from './quotes/Quotes';
import Weather from './weather/Weather';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import { handleCalendar } from '../features/date/dateSlice';

import { handleTotalList } from '../features/fetchList/fetchListSlice';

const DIARY_LS = 'diary_list';

interface Diary {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadedList = localStorage.getItem(DIARY_LS);

    if (loadedList) {
      const parsedList = JSON.parse(loadedList);
      dispatch(handleTotalList(parsedList));
    }
  }, []);

  return (
    <div className="main_wrap">
      <div className="main_header">
        <div className="greeting">Hello, Geust</div>
        <Weather />
        <div
          className="calendar_btn"
          onClick={() => dispatch(handleCalendar())}
        >
          <CalendarIcon />
        </div>
      </div>
      <ReactDayPicker />
      <Quotes />
      <DayInfo />
      <DiaryRecordList />
    </div>
  );
};

export default Main;
