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

      {/* Right: Links */}
      <div className="navbar-right">
        <a href="#home">मुखपृष्ठ</a>
        <a href="#about">आमच्याबद्दल</a>
        <a href="#events">उपक्रम</a>
        <a href="#contact">संपर्क</a>
      </div>
    </nav>
  );
};

export default Navbar;
