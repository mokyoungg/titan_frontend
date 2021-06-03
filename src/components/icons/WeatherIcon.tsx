import React from 'react';
import { IconContext } from 'react-icons';
import { WiCloud, WiDaySunny, WiRain, WiStrongWind } from 'react-icons/wi';

import { useAppSelector } from '../../app/hooks';

const WeatherIcon: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <IconContext.Provider value={{ color: '#fff', size: '40px' }}>
      {weather.weather?.indexOf('cloud') !== -1 && <WiCloud />}
      {weather.weather?.indexOf('rain') !== -1 && <WiRain />}
      {weather.weather?.indexOf('clear') !== -1 && <WiDaySunny />}
    </IconContext.Provider>
  );
};

export default WeatherIcon;
