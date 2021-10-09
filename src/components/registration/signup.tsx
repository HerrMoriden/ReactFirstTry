import React from 'react';
import './signup.css';
import { TextField, Divider } from '@mui/material';

function SignUp() {
  return (
    <form>
      <div className="input-group name">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="First Name"
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
        />
      </div>
      <Divider variant="middle" />
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
        <TextField
          required
          id="outlined-required"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </form>
  );
}

export default SignUp;
