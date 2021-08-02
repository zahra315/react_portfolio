import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="react logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">
                Home
              </a> */}
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                About
              </a> */}
              <NavLink to="/about">About Me!</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Project
              </a> */}
              <NavLink to="/project">Project</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Resume
              </a> */}
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Contacts
              </a> */}
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
