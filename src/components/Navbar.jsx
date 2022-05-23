import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import './Navbar.css';
  
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav className='navbar'>
        <NavLink className="navHover" to='/' onClick={closeMobileMenu}>
          <h1 style={{fontSize: '2.5rem'}}>CHICAGO MOON <img src={require('../images/logo.png')} width="30px" alt='logo' /> TIMES</h1>
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