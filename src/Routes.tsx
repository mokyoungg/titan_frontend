import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Emotion from './components/diary/Emotion';
import Question from './components/diary/Question';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/emotion" component={Emotion} />
        <Route exact path="/question" component={Question} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
