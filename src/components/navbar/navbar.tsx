import './navbar.css';
import NavElement from './navbarElement/navElement';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const user = useAuth()?.currentUser;
  
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
