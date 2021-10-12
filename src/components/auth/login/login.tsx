import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { RootState } from '../../../store';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import { setLoginState, LoginData } from '../authSlice';

function Login() {
  const loginState = useAppSelector((state: RootState) => state.auth?.loginState);
  let inputFields: LoginData = loginState
    ? loginState
    : { userName: '', password: '' };
    
  const dispatch = useAppDispatch();

  const [inputValues, setInputValues] = useState(inputFields);

  const handleChange = (e: any) => {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  };

  function submitLogin(e: any): void {
    e.preventDefault();
    console.log(inputValues);
    if (
      inputValues?.userName?.length < 0 &&
      inputValues?.password?.length < 0
    ) {
      dispatch(setLoginState(inputValues));
    }
    return;
  }

  return (
    <div id="loginContainer">
      <h2>Welcome Back</h2>
      <form onSubmit={submitLogin} className="authForm">
        <div className="input-group">
          <TextField
            name="userName"
            onChange={handleChange}
            required
            className="outlined-required"
            label="User Name"
            defaultValue=""
            autoComplete="username"
          />

          <TextField
            name="password"
            onChange={handleChange}
            required
            className="outlined-required"
            type="password"
            label="Password"
            autoComplete="current-password"
          />
        </div>
        <Button type="submit" variant="outlined">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default Login;
