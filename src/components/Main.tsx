import React, { useEffect } from 'react';
import './Main.scss';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchQuotes } from '../features/quotes/fetchQuotesSlice';

import ReactDayPicker from './calendar/ReactDayPicker';
import { handleCalendar } from '../features/calendar/calendarSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state) => state.quotes.quotes);
  const show = useAppSelector((state) => state.showCalendar);

  console.log(show);

  useEffect(() => {
    const randomNum = getRanNum();
    dispatch(fetchQuotes(randomNum));
  }, []);

  const getRanNum = () => {
    const randomNum = Math.random() * 1400;
    const randomNumFloor = Math.floor(randomNum);
    return randomNumFloor;
  };

  return (
    <div className="main_wrap">
      <div className="main_header">
        <div className="time_line" onClick={() => dispatch(handleCalendar())}>
          Time line
        </div>
      </div>
      <ReactDayPicker />
      <hr className="header_line"></hr>
      <hr className="header_line"></hr>
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
      <div className="date_section">
        <div className="today">25</div>
        <div className="other_date">26 27</div>
      </div>
      <div className="greeting_section">
        <div className="greeting">Hello, Guest</div>
        <button className="start_btn">Write Something</button>
      </div>
    </div>
  );
};

export default Main;
