import React from "react";
import { useMediaQuery } from 'react-responsive'

function Footer() {
  const year = new Date().getFullYear();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' });
  let footerStyle = {};

  if(isTabletOrMobile) {
    footerStyle = {
      background: '#303030',
      backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
      color: '#fff',
      textAlign: 'center',
      bottom: '0',
      fontSize: "2.5rem",
      width: '100%',
      padding: "3rem 0",
      height: '16rem'
    }
  } else {
    footerStyle = {
      background: '#303030',
      backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
      color: '#fff',
      textAlign: 'center',
      bottom: '0',
      width: '100%',
      height: '5rem'
    };
  }

  return (
    <footer style={footerStyle}>
      <p style={{
          fontFamily: "'BentonSans', sans-serif",
          fontWeight: "normal"
        }}>Thoughts? Opinions? Story suggestions? Send them all to moontimeletters@gmail.com</p>
      <p style={{
          fontFamily: "'BentonSans', sans-serif",
          fontWeight: "normal"
        }}>Chicago Moon-Times ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
