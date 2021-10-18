import { useContext } from 'react';
import './navbar.css';
import NavElement from './navbarElement/navElement';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const user = useContext(AuthContext)?.currentUser;
  console.log(user);
  
  return (
    <div className="navbar">
      <NavElement variant="text" title="Logo" href="/"></NavElement>
      <div className="navbar-navigation">
        <div>
          <NavElement variant="outlined" title="NAV1" href="#"></NavElement>
        </div>
        <div>
          <NavElement variant="outlined" title="NAV2" href="#"></NavElement>
        </div>
        <div>
          <NavElement variant="outlined" title="NAV3" href="#"></NavElement>
        </div>
      </div>
      <div className="auth-group">
        {!user ? (
          <>
            <NavElement
              variant="outlined"
              title="REGISTER"
              href="/auth/sign-up"
            />
            <NavElement variant="outlined" title="LOGIN" href="/auth/login" />
          </>
        ) : (
          <NavElement variant="outlined" title="PROFILE" href="/auth" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
