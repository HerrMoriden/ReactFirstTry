import React from 'react';
import './login.css';
import { TextField } from '@mui/material';

export function Login() {
  return (
    <div id="loginContainer">
      <h4>Welcome Back</h4>
      <form id="loginForm">
        <div className="input-group">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="User Name"
          />

          <TextField
            required
            id="outlined-required"
            type="password"
            autoComplete="current-password"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
