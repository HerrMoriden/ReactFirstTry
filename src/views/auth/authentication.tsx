import { useState, useContext, useEffect } from 'react';
import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/auth/login/login';
import SignUp from '../../components/auth/registration/signup';
import Profile from './profile/profile';
import { AuthContext, useAuth } from '../../contexts/AuthContext';

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
  let user = useContext(AuthContext)?.currentUser;
  const auth = useAuth();

  let registerInputFields: RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  };

  let loginInputFields: LoginData = {
    email: '',
    password: '',
  };

  const [registerInputValues, setRegisterInputValues] =
    useState(registerInputFields);

  const [loginInputValues, setLoginInputValues] = useState(loginInputFields);

  const [submitStatus, setSubmitStatus] = useState(false);

  function submitCheck(inputValues: LoginData | RegisterData): boolean {
    for (const inputValue in inputValues) {
      if (inputValue.length <= 1) {
        return false;
      }
    }
    return true;
  }

  function registerCheck(inputValues: RegisterData): boolean {
    return inputValues.password === inputValues.rePassword;
  }

  useEffect(() => {
    if (
      submitCheck(registerInputValues) &&
      registerCheck(registerInputValues) &&
      submitStatus
    ) {
      auth?.signUp(registerInputValues.email, registerInputValues.password);
    }
  }, [auth, registerInputValues, submitStatus]);

  useEffect(() => {
    if (submitCheck(loginInputValues) && submitStatus) {
      auth?.login(loginInputValues.email, loginInputValues.password);
    }
  }, [auth, loginInputValues, submitStatus]);

  const match = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route path={`${match.url}/sign-up`}>
          <SignUp
            submitSignUp={setRegisterInputValues}
            submitStatus={setSubmitStatus}
          />
        </Route>
        <Route path={`${match.url}/login`}>
          <Login
            submitLogin={setLoginInputValues}
            submitStatus={setSubmitStatus}
          />
        </Route>
        <Route path={match.url}>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default Authentication;
