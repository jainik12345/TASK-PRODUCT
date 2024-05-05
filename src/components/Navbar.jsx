import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light fixed-top shadow">
        <div className="container-fluid container">
          <NavLink to="/">
            <h1>L O G O</h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
