import { useState } from 'react';
import '../../../views/auth/authentication.css'
import { TextField, Button } from '@mui/material';
import { useAuth, AuthContextType } from '../../../contexts/AuthContext'

function SignUp () {
  const auth: AuthContextType | null = useAuth();

  let inputFields: RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  };
  const [inputValues, setInputValues] = useState(inputFields);

  function checkInputValues(): boolean {
    let it: keyof RegisterData;
    for (it in inputValues) {
      if (inputValues[it].length <= 1) {
        return false;
      }
    }
    return inputValues.password === inputValues.rePassword;
  }

  const handleChange = (e: any) => {
    setInputValues((ev) => ({
      ...ev,
      [e.target.name]: e.target.value,
    }));
  };

  async function submitSignUp(e: any): Promise<void> {
    e.preventDefault();
    try {
      if (checkInputValues()) {
        auth?.signUp(inputValues.email, inputValues.password)
      }
      return;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h2>Welcome, Your Fist Time ?</h2>
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
        <div className="input-group">
          <div>
            <TextField
              name="email"
              onChange={handleChange}
              required
              className="outlined-required"
              label="Email"
              type="email"
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
        <Button type="submit" variant="contained">
          REGISTER
        </Button>
      </form>
    </div>
  );
}

export default SignUp;

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
}