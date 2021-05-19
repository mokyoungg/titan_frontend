import React from 'react';
import './App.scss';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div className="app_wrap">
      <Routes />
    </div>
  );
};

export default App;
