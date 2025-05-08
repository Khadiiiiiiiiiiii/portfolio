import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/home">
          MyPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
