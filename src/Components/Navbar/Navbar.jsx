import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'
import "./Navbar.css";

const Nav = () => {
  const auth = false;

  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
        <Avatar
          alt=""
          src="animat-logo.gif"
          sx={{ width: 56, height: 56 }}
        />
        <h2 className="heading">parmeshwarmall64@gmail.com</h2>
        </div>
        <div className="navbar-link">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/Portfolio/" className="nav-link" activeClassName="active"
                exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio/skills" className="nav-link" activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio/projects" className="nav-link" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio/education" className="nav-link" activeClassName="active">
                Educations
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="resume">
        <Button variant="outlined"><a href="Resume.pdf" target="_blank">Check Resume</a></Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
