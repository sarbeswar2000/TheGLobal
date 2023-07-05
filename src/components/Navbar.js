// import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="data:image/png;base64,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"
                alt=""
                width="50"
                height="40"
              />
            </a>
            <a className="navbar-brand" href="/">
              <h3>Welcome to TheGlobal News..</h3>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default Switch{" "}
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
