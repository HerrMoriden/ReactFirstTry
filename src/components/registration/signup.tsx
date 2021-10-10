import { TextField, Divider } from '@mui/material';

function SignUp() {
  return (
    <div className="registerContainer">
      <h2>Welcome, Your Fist Time ?</h2>
      <Divider variant="middle" />
      <form className="authForm">
        <div className="input-group name">
          <TextField
            required
            className="outlined-required"
            label="First Name"
            defaultValue=""
          />

          <TextField
            required
            className="outlined-required"
            label="Last Name"
            defaultValue=""
          />
        </div>
        <Divider variant="middle" />
        <div className="input-group">
          <div >
            <TextField
              required
              className="outlined-required"
              label="User Name"
              defaultValue=""
            />
          </div>
          <div >
            <TextField
              required
              className="outlined-required"
              label="Password"
              type="password"
            />
            <TextField
              required
              className="outlined-required"
              label="repeat Password"
              type="password"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
