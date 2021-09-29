import { NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png";
import resume from "../assets/data/Zahra Seyedi RESUME.pdf";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                exact
                className="nav-link"
                activeClassName="text-white"
              >
                About Me!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                exact
                className="nav-link"
                activeClassName="text-white"
              >
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                activeClassName="text-white"
                href={resume}
                rel="noreferrer"
                download="Resume"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                exact
                className="nav-link"
                activeClassName="text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
