import React from "react";
import logo from "../assets/logo.svg";
const Header = ({ className }) => {
  return (
    <div className={className}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
