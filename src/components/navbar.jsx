import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary mt-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
