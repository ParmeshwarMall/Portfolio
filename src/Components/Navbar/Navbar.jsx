import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isMobileMenuOpen]);

  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
          <Avatar alt="" src="animat-logo.gif" sx={{ width: 56, height: 56 }} />
          <h2 className="heading">parmeshwarmall64@gmail.com</h2>
        </div>
        <div className={`navbar-link ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink
                to="/Portfolio/"
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Portfolio/skills"
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Portfolio/projects"
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Portfolio/education"
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Portfolio/contact"
                className="nav-link"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="resume">
              <Button variant="outlined">
                <a href="Resume.pdf" target="_blank">
                  Check Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
