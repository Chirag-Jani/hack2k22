import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark border p-3">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5 fs-3 fw-bold" to="/">
            Cultural Artifacts
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-5 fs-4"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-5 fs-4"
                  aria-current="page"
                  to="/nfts"
                >
                  NFTs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
