import React from 'react';
import './App.scss';
import 'react-calendar/dist/Calendar.css';

import Routes from './Routes';
import Main from './components/Main';
import Emotion from './components/diary/Emotion';

const App: React.FC = () => {
  return (
    <div className="app_wrap">
      <Emotion />
      {/* <Main /> */}
      {/* <Routes /> */}
    </div>
  );
};

export default App;
