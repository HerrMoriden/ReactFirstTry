import { useState } from 'react';
import './authentication.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '../../components/auth/login/login';
import SignUp from '../../components/auth/registration/signup';


export interface RegisterData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  rePassword: string;
}

export interface LoginData {
  userName: string
  password: string
}

function Authentication() {
  let registerInputFields: RegisterData = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    rePassword: '',
  };
  const [registerInputValues, setRegisterInputValues] = useState(registerInputFields);

  let loginInputFields: LoginData = {
    userName: '',
    password: ''
  };
  const [loginInputValues, setLoginInputValues] = useState(loginInputFields);
  console.log(registerInputValues);
  console.log(loginInputValues);
  
  const match = useRouteMatch();

  return (
    <div className="container">
      <div> {`${registerInputValues ? registerInputValues.userName : ''}`}</div>
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
