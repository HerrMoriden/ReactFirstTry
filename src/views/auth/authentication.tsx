import { useState, useEffect } from 'react';
import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/auth/login/login';
import SignUp from '../../components/auth/registration/signup';
import Profile from './profile/profile';
import { useAuth, AuthContextType } from '../../contexts/AuthContext';

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
  const auth: AuthContextType | null = useAuth();

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

  const [submitStatusRegister, setSubmitStatusRegister] = useState(false);
  const [submitStatusLogin, setSubmitStatusLogin] = useState(false);

  function submitCheck(inputValues: LoginData | RegisterData): boolean {
    let it: keyof (LoginData | RegisterData);
    for (it in inputValues) {
      if (inputValues[it].length <= 1) {
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
      submitStatusRegister
    ) {
      setSubmitStatusRegister(false);
      auth?.signUp(registerInputValues.email, registerInputValues.password);
    }
  }, [auth, registerInputValues, submitStatusRegister]);

  useEffect(() => {
    if (submitCheck(loginInputValues) && submitStatusLogin) {
      setSubmitStatusLogin(false);
      auth?.login(loginInputValues.email, loginInputValues.password);
    }
  }, [auth, loginInputValues, submitStatusLogin]);

  const match = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route path={`${match.url}/sign-up`}>
          <SignUp
            submitSignUp={setRegisterInputValues}
            submitStatus={setSubmitStatusRegister}
          />
        </Route>
        <Route path={`${match.url}/login`}>
          <Login
            submitLogin={setLoginInputValues}
            submitStatus={setSubmitStatusLogin}
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
