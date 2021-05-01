import React from "react";
import logo from "../../assets/arun.jpg";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Header() {
  // const location = useLocation();
  // const pathname = location.pathname.replace("/", "");
  const handleLinkClick = (e) => {
    if (e.target.className == "logo-link") {
      Array.from(document.querySelectorAll(".rc-links")).forEach((rcLink) =>
        rcLink?.classList?.remove("active")
      );
      document.getElementById("home-link").classList.add("active");
      return;
    }
    Array.from(document.querySelectorAll(".rc-links")).forEach((rcLink) =>
      rcLink?.classList?.remove("active")
    );
    e.target?.classList?.add("active");
  };
  return (
    <div className="header">
      <div className="d-flex header-container justify-content-start align-items-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo-link" onClick={handleLinkClick} />
          </Link>
        </div>
        <div className="menu-it d-flex justify-content-center">
          <div className="menu-items text-uppercase">
            <Link
              className="rc-links active"
              id="home-link"
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </div>
          <div className="menu-items text-uppercase">
            <Link className="rc-links" to="/skills" onClick={handleLinkClick}>
              Skills
            </Link>
          </div>
          <div className="menu-items text-uppercase">
            <Link className="rc-links" to="/projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </div>
          {/* <div className="menu-items text-uppercase">
            <Link className="rc-links" to="/services">Services</Link onClick={handleLinkClick}>
          </div> */}
          <div className="menu-items text-uppercase">
            <Link className="rc-links" to="/about-me" onClick={handleLinkClick}>
              About Me
            </Link>
          </div>
        </div>
        <div className="tel">
          <div className="menu-items text-uppercase">
            <a href="tel:919528151765">+91 9528 151 765</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
