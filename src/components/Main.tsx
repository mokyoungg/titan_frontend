import React, { useEffect, useState } from 'react';
import './Main.scss';
import CalendarIcon from './icons/CalendarIcon';
import WeatherIcon from './icons/WeatherIcon';
import TodayInfo from '../components/todayInfo/TodayInfo';
import DiaryRecordList from '../components/diaryList/DiaryRecordList';

import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchQuotes } from '../features/quotes/fetchQuotesSlice';

import ReactDayPicker from './calendar/ReactDayPicker';
import { showCalendar } from '../features/calendar/calendarSlice';

import { handleList } from './../features/diary/diarySlice';

// {}가 없을 경우, type error 발생
//import fetchWeather from '../features/weather/fetchWeatherSlice';
import { fetchWeather } from '../features/weather/fetchWeatherSlice';

const DIARY_LS = 'diary_list';

interface Diary {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state) => state.quotes.quotes);
  const calendar = useAppSelector((state) => state.handleCalendar.selectDate);
  const weather = useAppSelector((state) => state.weather.weather);
  const list = useAppSelector((state) => state.diary.list);

  const [loadedDiary, setLoadedDiary] = useState<Diary[]>([]);
  const [diary, setDiary] = useState<Diary>({
    id: 0,
    date: '',
    emotion: '',
    content: ['']
  });
  const [selectDay, setSelectDay] = useState<string>('');
  const [dayCheck, setDayCheck] = useState<boolean>(false);

  useEffect(() => {
    const randomNum = getRanNum();
    dispatch(fetchQuotes(randomNum));
    dispatch(fetchWeather(''));

    const loadedList = localStorage.getItem(DIARY_LS);

    if (loadedList) {
      const parsedList = JSON.parse(loadedList);
      const newList = parsedList.map((el: Diary) => {
        return { ...el, date: calendarToStr(el.date) };
      });
      setLoadedDiary(newList);
      dispatch(handleList(newList));

      const day = calendarToStr(calendar);

      for (let i = 0; i < newList.length; i++) {
        if (newList[i].date === day) {
          setDayCheck(true);
          setDiary(newList[i]);
          break;
        } else {
          setDayCheck(false);
        }
      }
    }

    setSelectDay(calendarToStr(calendar));
  }, [calendar]);

  const calendarToStr = (str: string) => {
    const result = str.slice(-str.length, str.indexOf('오') - 2);
    return result;
  };

  const getRanNum = () => {
    const randomNum = Math.random() * 1400;
    const randomNumFloor = Math.floor(randomNum);
    return randomNumFloor;
  };

  return (
    <div className="main_wrap">
      <div className="main_header">
        <div className="greeting">Hello, Geust</div>
        <div className="weather_section">
          <div className="temp">
            {weather.temp !== null ? `${Math.round(weather.temp)}℃` : null}
          </div>
          <div className="weather_icon">
            {weather.weather !== null ? <WeatherIcon /> : null}
          </div>
        </div>
        <div className="calendar_btn" onClick={() => dispatch(showCalendar())}>
          <CalendarIcon />
        </div>
      </div>
      <ReactDayPicker />
      <div className="quotes_section">
        {quotes.text !== undefined ? (
          <>
            <div className={quotes.text.length > 80 ? `long_quotes` : `quotes`}>
              {quotes.text}
            </div>
            <div className="author">
              {quotes.author !== null ? `- ${quotes.author}` : 'unknown'}
            </div>
          </>
        ) : null}
      </div>
      <TodayInfo />
      <DiaryRecordList />
    </div>
  );
};

export default Main;
