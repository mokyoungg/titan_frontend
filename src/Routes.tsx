import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
