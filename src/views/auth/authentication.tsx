import React from 'react';
import './authentication.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Login from '../../components/login/login';
import SignUp from '../../components/registration/signup';

function Authentication() {
    const match = useRouteMatch();
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path={`${match.path}/register`}>
            <SignUp />
          </Route>
          <Route path={match.path}>
            <Login />
            <h6>
              <Link to={`${match.url}/register`}>Not Registered Yet ?</Link>
            </h6>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Authentication;
