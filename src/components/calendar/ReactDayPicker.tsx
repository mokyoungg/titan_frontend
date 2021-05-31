import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import './ReactDayPicker.scss';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

const ReactDayPicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.showCalendar.show);

  const [selectedDay, setSelectDay] = useState<any[]>([new Date()]);
  const [completedDays, setCompletedDays] = useState([
    new Date(2021, 4, 3),
    new Date(2021, 4, 12)
  ]);

  const modifiers = {
    completedDay: completedDays,
    sunday: { daysOfWeek: [0] },
    saturday: { daysOfWeek: [6] }
  };

  const modifiersStyles = {
    completedDay: {
      background: 'orange',
      color: 'white'
    },
    sunday: {
      color: 'red',
      background: 'white'
    },
    saturday: {
      color: 'blue',
      background: 'white'
    }
  };

  const handleDayClick = (day: object) => {
    setSelectDay([day]);
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="calendar_wrap">
        {/* <button className="calendar_btn">x</button> */}
        <DayPicker
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          onDayClick={handleDayClick}
          selectedDays={selectedDay}
        />
      </div>
    );
  }
};

export default ReactDayPicker;

// react day picker에서 2번째 매개변수를 통해
// 조작하는 함수
// const handleDayClick = (day: object, selected: any, props: any) => {
//     let newDate: object[] = [];
//     console.log('props:', props);
//     console.log(selected);
//     console.log(day);
//     console.log(props.target.ariaSelected);

//     props.target.arialSelected = !props.target.arialSelected;

//     // props.target.ariaSelected = true;
//     // props.target.ariaDisabled = true;
//     // props.target.ariaSelected = true;
//     // console.log(day);
//     // console.log(typeof day);
//     // const newDate = [...selectedDay, day];
//     // setSelectDay(newDate);
//     if (!props.target.ariaSelected) {
//       newDate.push(day);
//     } else {
//       newDate.filter((el) => el !== day);
//     }
//     console.log(newDate);
//   };
