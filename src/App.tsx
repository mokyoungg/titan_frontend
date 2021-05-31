import React from 'react';
import './App.scss';
import 'react-calendar/dist/Calendar.css';

import Routes from './Routes';
import Main from './components/Main';
import ReactDayPicker from './components/calendar/ReactDayPicker';

const App: React.FC = () => {
  return (
    <div className="app_wrap">
      <Main />
      {/* <Routes /> */}
    </div>
  );
};

export default App;
