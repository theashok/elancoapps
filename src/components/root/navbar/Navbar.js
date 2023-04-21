import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
          >
            <h3>Elanco</h3>
          </Link>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link to="/" className="nav-link px-3">
                Applications
              </Link>
            </div>
          </div>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link to="/resources" className="nav-link px-3">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
