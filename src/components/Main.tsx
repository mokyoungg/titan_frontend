import React, { useEffect } from 'react';
import './Main.scss';
import CalendarIcon from './icons/CalendarIcon';
import WeatherIcon from './icons/WeatherIcon';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchQuotes } from '../features/quotes/fetchQuotesSlice';

import ReactDayPicker from './calendar/ReactDayPicker';
import { showCalendar } from '../features/calendar/calendarSlice';

import useCalendar from '../features/calendar/useCalendar';
//import fetchWeather from '../features/weather/fetchWeatherSlice';
import { fetchWeather } from '../features/weather/fetchWeatherSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state) => state.quotes.quotes);
  const calendar = useAppSelector((state) => state.handleCalendar.selectDate);
  const weather = useAppSelector((state) => state.weather.weather);

  const { getDate, dateInfo } = useCalendar();

  useEffect(() => {
    const randomNum = getRanNum();
    dispatch(fetchQuotes(randomNum));
    dispatch(fetchWeather(''));
    getDate(calendar);
  }, [calendar]);

  console.log(weather);

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
      <ReactDayPicker />
      <div className="start_section">
        <button className="start_btn">Start Today's Diary</button>
      </div>
      <div className="quotes_section">
        {quotes.text !== undefined ? (
          <>
            <div className={quotes.text.length > 80 ? `long_quotes` : `quotes`}>
              {quotes.text}
            </div>
            <div className="author">
              {quotes.author !== null ? `- ${quotes.author}` : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
