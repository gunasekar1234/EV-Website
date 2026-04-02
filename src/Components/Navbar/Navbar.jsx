import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;