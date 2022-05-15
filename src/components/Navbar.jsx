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
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to={{pathname:'https://www.buymeacoffee.com/moontimes'}} activeStyle>
            Donate
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/signin'>Subscribe</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
  
  export default Navbar;

  // function Header() {
    

//     return (<div className='nav'>
//         
//         <h1 className='title'>CHICAGO MOON<DarkModeIcon />TIMES</h1>
//         <a href='#About'>About</a>
//         <a href='https://www.buymeacoffee.com/moontimes'>Donate</a>
//     </div>);
// }