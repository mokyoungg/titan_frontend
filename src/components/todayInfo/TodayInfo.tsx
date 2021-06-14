import React, { useEffect } from 'react';
import './TodayInfo.scss';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useCalendar from '../../features/calendar/useCalendar';

const TodayInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(
    (state) => state.handleCalendar.selectDate
  );
  const { getDate, dateInfo } = useCalendar();

  useEffect(() => {
    getDate(currentDate);
  }, [currentDate]);

  return (
    <div className="today_info_wrap">
      <Link to="/emotion" style={{ textDecoration: 'none', width: '100%' }}>
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
        <div className="start_section">
          Start
          <br /> Today's Diary
        </div>
      </Link>
    </div>
  );
};

export default TodayInfo;
