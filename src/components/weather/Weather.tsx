import React, { useEffect } from 'react';
import './Weather.scss';
import WeatherIcon from '../icons/WeatherIcon';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
// {}가 없을 경우, type error 발생
import { fetchWeather } from '../../features/weather/fetchWeatherSlice';

const Weather: React.FC = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(fetchWeather(''));
  }, []);

  return (
    <div className="weather_section">
      <div className="temp">
        {weather.temp !== null ? `${Math.round(weather.temp)}℃` : null}
      </div>
      <div className="weather_icon">
        {weather.weather !== null ? <WeatherIcon /> : null}
      </div>
    </div>
  );
};

export default Weather;
