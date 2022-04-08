import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">EcoWash</Link>
      </div>
      <div className="right">
        <Link to="/client">Client</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Header;
