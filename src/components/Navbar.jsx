import NavMenu from "./Navmenu";

function Navbar({ onsignup, onlogin }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img
            src="https://www.paypalobjects.com/marketing/web/logos/paypal-mark-color_new.svg"
            alt="PayPal"
            className="paypal-logo-svg"
          />
        </div>
        <NavMenu />
      </div>
      <div className="navbar-right">
        <button type="button" className="login-btn" onClick={onlogin || onsignup}>
          Log In
        </button>
        <button type="button" className="signup-btn" onClick={onsignup}>
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Navbar;
