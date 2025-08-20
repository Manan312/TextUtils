import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar({
  title = "Set title here",
  aboutText = "About Text Utils",
  mode = "light",
  toggleButtonColor,
}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/TextUtils">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/TextUtils"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                {aboutText}
              </NavLink>
            </li>

            <li className={`nav-item dropdown`}>
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Change Button Color
              </a>
              <ul
                className={`dropdown-menu ${
                  mode === "dark" ? "dropdown-menu-dark" : ""
                }`}
              >
                <li>
                  <button
                    className="dropdown-item"
                    href="/"
                    onClick={() => {
                      toggleButtonColor("red");
                    }}
                  >
                    Red
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    href="/"
                    onClick={() => {
                      toggleButtonColor("green");
                    }}
                  >
                    Green
                  </button>
                </li>
                {/* <li><button className="dropdown-item" href="/" onClick={()=>{toggleButtonColor('blue')}}>Blue</button></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// //Setting Default Props- Depricated in React 17+
Navbar.defaultProps = {
  title: "Text Utils",
  aboutText: "About Text Utils",
};
//Setting PropTypes-Depricated in React 17+
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
