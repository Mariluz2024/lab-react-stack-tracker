import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="navbar"
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        StackTracker
      </Link>
    </div>
  );
}

export default Navbar;