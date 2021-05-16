import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  let isLoggedIn = false;
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto front-weight-normal">
          <Link to="/">
            <img src="../images/FitnessApp.png" alt="Logo for the website." />
          </Link>
        </h4>
        {isLoggedIn ? (
          <button className="btn btn-success">Logout</button>
        ) : (
          <button className="btn btn-success">Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;
