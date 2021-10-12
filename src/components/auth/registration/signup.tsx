import React, { useState } from 'react';
import { TextField, Divider, Button } from '@mui/material';
import { RegisterData } from '../../../views/auth/authentication';

function SignUp(props: {
  submitSignUp: React.Dispatch<React.SetStateAction<RegisterData>>;
}) {
  let inputFields: RegisterData = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    rePassword: '',
  };
  const [inputValues, setInputValues] = useState(inputFields);

  const handleChange = (e: any) => {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  };

  function submitSignUp(e: any): void {
    e.preventDefault();
    if (submitCheck()) {
      props.submitSignUp((ev) => ({
        ...ev,
        ...inputValues,
      }));
    }
    return;
  }

  function submitCheck(): boolean {
    for (const inputValue in inputValues) {
      if (inputValue.length <= 1) {
        return false;
      }
    }
    if (inputValues.password !== inputValues.rePassword) return false;
    
    return true;
  }

  return (
    <div className="registerContainer">
      <h2>Welcome, Your Fist Time ?</h2>
      <Divider variant="middle" />
      <form onSubmit={submitSignUp} className="authForm">
        <div className="input-group name">
          <TextField
            name="firstName"
            onChange={handleChange}
            required
            className="outlined-required"
            label="First Name"
            defaultValue=""
            autoComplete="given-name"
          />

          <TextField
            name="lastName"
            onChange={handleChange}
            required
            className="outlined-required"
            label="Last Name"
            defaultValue=""
            autoComplete="family-name"
          />
        </div>
        <Divider variant="middle" />
        <div className="input-group">
          <div>
            <TextField
              name="userName"
              onChange={handleChange}
              required
              className="outlined-required"
              label="User Name"
              defaultValue=""
              autoComplete="username"
            />
          </div>
          <div>
            <TextField
              name="password"
              onChange={handleChange}
              required
              className="outlined-required"
              label="Password"
              type="password"
              autoComplete="new-password"
            />
            <TextField
              name="rePassword"
              onChange={handleChange}
              required
              className="outlined-required"
              label="repeat Password"
              type="password"
              autoComplete="new-password"
            />
          </div>
        </div>
        <Button type="submit" variant="outlined">
          REGISTER
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
