import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { LoginData } from '../../../views/auth/authentication';

function Login(props: {
  submitLogin: React.Dispatch<React.SetStateAction<LoginData>>;
}) {
  let inputFields: LoginData = {
    userName: '',
    password: '',
  };
  let [inputValues, setInputValues] = useState(inputFields);

  function handleChange(e: any): void {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitLogin(e: any) {
    e.preventDefault();
    if (submitCheck()) {
      props.submitLogin((ev) => ({
        ...ev,
        ...inputValues,
      }));
    }
    return inputValues;
  }

  function submitCheck(): boolean {
    for (const inputValue in inputValues) {
      if (inputValue.length <= 1) {
        return false;
      }
    }
    return true;
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
