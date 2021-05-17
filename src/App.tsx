import React from 'react';
import './App.scss';

import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App: React.FC = () => {
  return (
    <div className="app_wrap">
      <Landing />
    </div>
  );
};

export default App;
