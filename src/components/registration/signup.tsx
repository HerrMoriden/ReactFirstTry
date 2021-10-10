import { TextField, Divider, Button } from '@mui/material';

interface registerData {
  firstName: string
  lastName: string
  userName: string
  password: string
  rePassword: string
}

function SignUp() {
  function submitSignUp(e: any): registerData {
    e.preventDefault();
    return { firstName: 'ö', lastName: '', userName: '', password: '', rePassword: ''}
  }

  return (
    <div className="registerContainer">
      <h2>Welcome, Your Fist Time ?</h2>
      <Divider variant="middle" />
      <form onSubmit={submitSignUp} className="authForm">
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
        <Button type='submit' variant='outlined'>
          REGISTER
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
