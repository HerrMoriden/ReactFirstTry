import { connect } from 'react-redux'
import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/auth/login/login';
import SignUp from '../../components/auth/registration/signup';
import { useAppSelector } from '../../hooks';

const mapStateToProp = (state: any) => ({
  loginState: state.auth?.loginState,
  registerState: state.auth?.registerState
})

function Authentication() {
  const match = useRouteMatch();
  let temp = useAppSelector((state) => state.auth?.loginState);

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

connect(mapStateToProp, Authentication)

export default Authentication;
