import React, { useEffect, useState } from 'react';
import './TodayInfo.scss';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useCalendar from '../../features/calendar/useCalendar';

const TodayInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(
    (state) => state.handleCalendar.selectDate
  );
  //const list = useAppSelector((state) => state.diary.list);
  const list = useAppSelector((state) => state.list.totalList);

  const { getDate, dateInfo } = useCalendar();

  const [dayCheck, setDayCheck] = useState<boolean>(false);

  useEffect(() => {
    getDate(currentDate);

    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].date === currentDate) {
          setDayCheck(true);
          break;
        } else {
          setDayCheck(false);
        }
      }
    }
  }, [currentDate]);

  //console.log(dayCheck);

  return (
    <>
      {!dayCheck ? (
        <div className="today_info_wrap">
          <Link to="/diary" style={{ textDecoration: 'none', width: '100%' }}>
            <div className="date_section">
              <div className="today">
                {dateInfo.today < 10
                  ? `0${dateInfo.today}`
                  : `${dateInfo.today}`}
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
      ) : (
        <div>오늘 완료</div>
      )}
    </>
  );
};

export default TodayInfo;
