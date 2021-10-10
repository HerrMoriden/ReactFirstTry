import './navbar.css';
import NavElement from './navbarElement/navElement';

function Navbar() {
  return (
    <div className="navbar">
      <NavElement variant="text" title="Logo" href="/"></NavElement>
      <div className="navbar-navigation">
        <div>
          <NavElement
            variant="outlined"
            title="NAV1"
            href="#"
          ></NavElement>
        </div>
        <div>
          <NavElement
            variant="outlined"
            title="NAV2"
            href="#"
          ></NavElement>
        </div>
        <div>
          <NavElement
            variant="outlined"
            title="NAV3"
            href="#"
          ></NavElement>
        </div>
      </div>
      <div className="auth-group">
        <NavElement
          variant="outlined"
          title="REGISTER"
          href='/auth/sign-up'
        ></NavElement>
        <NavElement variant="outlined" title="LOGIN" href='/auth'></NavElement>
      </div>
    </div>
  );
}

export default Navbar;
