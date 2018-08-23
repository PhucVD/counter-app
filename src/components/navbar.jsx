import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="badge badge-pill badge-secondary">
        <h3>{props.totalCounters}</h3>
      </span>
      {/* <span className="navbar-brand mb-0 h1">
        Number of orders: {props.totalCounters}
      </span> */}
    </nav>
  );
};

export default NavBar;
