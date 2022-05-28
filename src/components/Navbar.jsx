import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive'
  
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  let headerStyle = null;

  if(isTabletOrMobile) {
    headerStyle = {fontSize: '2.5rem', width: "90%"};
  } else {
    headerStyle = {fontSize: '2.5rem'};
  }

  return (
    <>
      <Nav className='navbar'>
        <NavLink className="navHover" to='/' onClick={closeMobileMenu}>
          <h1 style={headerStyle}>CHICAGO MOON <img src={require('../images/logo.png')} width="30px" alt='logo' /> TIMES</h1>
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          <i style={{color:"white"}} className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink className="navHover nav-links" onClick={closeMobileMenu} style={{ marginRight: 20 }} to='/about' activeStyle>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="navHover nav-links" onClick={closeMobileMenu} style={{ marginRight: 20 }} to='/donate' activeStyle>
              Donate
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavBtn>
              <NavBtnLink className="navHover nav-links" onClick={closeMobileMenu} to='/subscribe'>Subscribe</NavBtnLink>
            </NavBtn>
          </li>
        </ul>
      </Nav>
    </>
  );
};
  
export default Navbar;