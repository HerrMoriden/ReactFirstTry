import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { LoginData } from '../../../views/auth/authentication';

function Login(props: {
  submitLogin: React.Dispatch<React.SetStateAction<LoginData>>,
  submitStatus: React.Dispatch<React.SetStateAction<boolean>>,
}) {

  let inputFields: LoginData = {
    email: '',
    password: '',
  };
  let [inputValues, setInputValues] = useState(inputFields);

  function handleChange(e: any): void {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitLogin(e: any) {
    e.preventDefault();
    try {
      props.submitStatus(true);
      props.submitLogin((ev) => ({
        ...ev,
        ...inputValues,
      }));
      return inputValues;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="loginContainer">
      <h2>Welcome Back</h2>
      <form onSubmit={submitLogin} className="authForm">
        <div className="input-group">
          <TextField
            name="email"
            onChange={handleChange}
            required
            className="outlined-required"
            label="Email"
            type="email"
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
