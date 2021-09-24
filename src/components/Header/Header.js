import React from "react";
import logo from "../../images/logo.png";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <nav>
        <a href="/shop">shop</a>
        <a href="/order">Order review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
