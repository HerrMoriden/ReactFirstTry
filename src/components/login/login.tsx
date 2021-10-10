import { TextField } from '@mui/material';

export function Login() {
  return (
    <div id="loginContainer">
      <h2>Welcome Back</h2>
      <form className="authForm">
        <div className="input-group">
          <TextField
            required
            id="outlined-required"
            label="User Name"
            defaultValue=""
          />

          <TextField
            required
            id="outlined-required"
            type="password"
            label="Password"
            autoComplete="current-password"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
