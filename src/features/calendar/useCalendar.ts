import React, { useEffect, useState } from 'react';

const useCalendar = () => {
  const [dateInfo, setDateInfo] = useState({
    today: 0,
    tomorrow: 0,
    dayAfterTomorrow: 0
  });

  const strToDate = (str: string) => {
    const sliceDate = str.slice(-str.length, str.indexOf('오') - 2);
    const result: any[] = sliceDate.replace(/\s/g, '').split('.');
    return new Date(result[0], result[1] - 1, result[2]);
  };

  const getDate = (str: string) => {
    let date = null;
    //const date = strToDate(str);
    if (str.length > 0) {
      date = strToDate(str);
    } else {
      date = new Date();
    }

    const today = date.getDate();
    const tomorrow = new Date(date.setDate(date.getDate() + 1)).getDate();
    const dayAfterTomorrow = new Date(
      date.setDate(date.getDate() + 1)
    ).getDate();

    setDateInfo({
      ...dateInfo,
      today: today,
      tomorrow: tomorrow,
      dayAfterTomorrow: dayAfterTomorrow
    });
  };

  return { getDate, dateInfo };
};

export default useCalendar;

/*
const dateFormatter = (ts: string): string => {
    const date = new Date(ts);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  export default dateFormatter;
*/
