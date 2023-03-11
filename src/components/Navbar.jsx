import React, { useState } from "react";
import { Nav, NavLink } from "./NavbarElements";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav className="navbar">
        <NavLink className="navHover" to="/" onClick={closeMobileMenu}>
          <h1 className="header">
            CHICAGO MOON
            <img
              className="logo-width"
              src={require("../images/logo.png")}
              alt="logo"
            />
            TIMES
          </h1>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i
            style={{
              color: "white",
            }}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              className="navHover nav-links"
              onClick={closeMobileMenu}
              style={{ marginRight: 20 }}
              to="/about"
              activeStyle
            >
              About
            </NavLink>
          </li>
          {/* <li className='nav-item'>
            <NavLink className="navHover nav-links" onClick={closeMobileMenu} style={{ marginRight: 20 }} to='/contact' activeStyle>
              Contact
            </NavLink>
          </li> */}
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;
