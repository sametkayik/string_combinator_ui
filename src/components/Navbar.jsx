import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Text Concatenate App</h3>
      <Link to="/">/Home</Link>
      <Link to="/collections">/Collections</Link>
    </div>
  );
};

export default Navbar;
