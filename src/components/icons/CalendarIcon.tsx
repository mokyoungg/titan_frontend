import React from 'react';
import { IconContext } from 'react-icons';
import { BiCalendar } from 'react-icons/bi';

const CalendarIcon: React.FC = () => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <BiCalendar />
    </IconContext.Provider>
  );
};

export default CalendarIcon;
