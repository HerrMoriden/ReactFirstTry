import { TextField, Button } from '@mui/material';

function Login() {
  function submitLogin(e: any) {
    e.preventDefault();
    console.log(e);
    return { username: '', password: '' };
  }

  return (
    <div id="loginContainer">
      <h2>Welcome Back</h2>
      <form onSubmit={submitLogin} className="authForm">
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
        <Button type="submit" variant="outlined">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default Login;
