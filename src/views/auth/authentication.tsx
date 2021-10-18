import { useState, useContext } from 'react';
import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/auth/login/login';
import SignUp from '../../components/auth/registration/signup';
import { AuthContext } from '../../contexts/AuthContext';
import { auth } from '../../firebase';

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

function Authentication() {
  let user = useContext(AuthContext);

  let registerInputFields: RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  };
  const [registerInputValues, setRegisterInputValues] =
    useState(registerInputFields);

  let loginInputFields: LoginData = {
    email: '',
    password: '',
  };
  const [loginInputValues, setLoginInputValues] = useState(loginInputFields);
  console.log(registerInputValues);
  console.log(loginInputValues);

  const match = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route path={`${match.url}/sign-up`}>
          <SignUp submitSignUp={setRegisterInputValues} />
        </Route>
        <Route path={`${match.url}`}>
          <Login submitLogin={setLoginInputValues} />
        </Route>
      </Switch>
    </div>
  );
}

export default Authentication;
