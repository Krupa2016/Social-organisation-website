import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Left: Logo */}
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Shivjayanti Utsav Samiti"
          className="navbar-logo"
        />
      </div>

      {/* Right: Navigation */}
      <div className="navbar-right">
        <Link to="/">मुखपृष्ठ</Link>
        <Link to="/about">आमच्याबद्दल</Link>
        <Link to="/Events">उपक्रम</Link>
        <Link to="/contact">संपर्क</Link>
      </div>

    </nav>
  );
};

export default Navbar;
