import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
        background: '#303030',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        color: '#fff',
        textAlign: 'center',
        bottom: '0',
        width: '100%',
        height: '5rem'
    }}>
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
