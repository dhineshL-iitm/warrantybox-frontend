import React from "react";
import "./NavBar.css";
    import "bootstrap/dist/css/bootstrap.min.css";
    import logo from './16.png';
function Navbar() {
  return (
    <div className="header">
      <div className="header__logo">
        <h3>
        <span className="bluefont"><img src={logo}></img></span>
        </h3>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <a href="./">
            {" "}
            <button className="navbutton">Home</button>
          </a>
          <a href="./about">
            {" "}
            <button className="navbutton">About Us</button>
          </a>
          <a href="./contactus">
            <button className="navbutton">Contact Us</button>
          </a>
          <a href="./">
          
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
