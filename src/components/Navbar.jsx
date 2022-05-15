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
        <NavLink to='/'>
          <h1 style={{fontSize: '2.5rem'}}>CHICAGO MOON <img src={require('../images/logo.png')} width="30px" alt='logo' /> TIMES</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink style={{ marginRight: 20 }} to='/about' activeStyle>
            About
          </NavLink>
          <NavLink style={{ marginRight: 20 }} to='/archives' activeStyle>
            Archives
          </NavLink>
          <NavLink style={{ marginRight: 20 }} to='/donate' activeStyle>
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