import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/login/login';
import SignUp from '../../components/registration/signup';

function Authentication() {
  const match = useRouteMatch();
  return (
    <div className="container">
      <Switch>
        <Route path={`${match.url}/sign-up`}>
          <SignUp />
        </Route>
        <Route path={`${match.url}`}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default Authentication;
