import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink className="navHover" to='/'>
          <h1 style={{fontSize: '2.5rem'}}>CHICAGO MOON <img src={require('../images/logo.png')} width="30px" alt='logo' /> TIMES</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className="navHover" style={{ marginRight: 20 }} to='/about' activeStyle>
            About
          </NavLink>
          <NavLink className="navHover" style={{ marginRight: 20 }} to='/donate' activeStyle>
            Donate
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/subscribe'>Subscribe</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;