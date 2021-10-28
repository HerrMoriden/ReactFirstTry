import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../views/auth/authentication.css';
import { useAuth, AuthContextType } from '../../../contexts/AuthContext';
import { TextField, Button } from '@mui/material';

function Login() {
  const auth: AuthContextType | null = useAuth();
  const history = useHistory();

  let inputFields: LoginData = {
    email: '',
    password: '',
  };
  let [inputValues, setInputValues] = useState(inputFields);

  function checkInputValues() {
    let it: keyof LoginData;
    for (it in inputValues) {
      if (inputValues[it].length <= 1) {
        return false;
      }
    }
    return true;
  }

  function handleChange(e: any): void {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitLogin(e: any) {
    e.preventDefault();
    try {
      if (checkInputValues()) {
        forward();
        auth?.login(inputValues.email, inputValues.password);
      }
      return;
    } catch (err) {
      console.log(err);
    }
  }

  function forward() {
    history.push('/');
  }

  return (
    <div className="container">
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
        <Button type="submit" variant="contained">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default Login;

interface LoginData {
  email: string;
  password: string;
}
