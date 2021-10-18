import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { LoginData } from '../../../views/auth/authentication';
import { useAuth } from '../../../contexts/AuthContext';

function Login(props: {
  submitLogin: React.Dispatch<React.SetStateAction<LoginData>>;
}) {
  const auth = useAuth();

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
      if (checkCredentials()) {
        props.submitLogin((ev) => ({
          ...ev,
          ...inputValues,
        }));
        await auth?.login(inputValues.email, inputValues.password);
      }
      return inputValues;
    } catch (err) {
      console.log(err);
    }
  }

  function checkCredentials(): boolean {
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
            name="email"
            onChange={handleChange}
            required
            className="outlined-required"
            label="Email"
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
