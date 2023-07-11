import { useState } from "react";
import "../styles/Navbar.css";
import Home from "./Home";
import Planets from "./Planets";
import Phenomena from "./Phenomena";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  let content;
  if (activeLink === "Home") {
    content = <Home />;
  } else if (activeLink === "Planets") {
    content = <Planets />;
  } else if (activeLink === "Phenomena") {
    content = <Phenomena />;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          className="logo"
          src="/public/images/black-hole.png"
          alt="an image of a black hole"
        />
      </div>
      <div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
        <a
          href="#"
          className={`navbar-item ${activeLink === "Home" ? "active" : ""}`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </a>
        <a
          href="#"
          className={`navbar-item ${
            activeLink === "Planets" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Planets")}
        >
          Planets
        </a>
        <a
          href="#"
          className={`navbar-item ${
            activeLink === "Phenomena" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("Phenomena")}
        >
          Phenomena
        </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className="navbar-content">{content}</div>
    </nav>
  );
}

export default Navbar;