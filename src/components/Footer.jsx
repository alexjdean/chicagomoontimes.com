import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
        background: '#060930',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        color: '#fff',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '3.5rem'
    }}>
      <p>Thoughts? Opinions? Story suggestions? Send them all to moontimeletters@gmail.com</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
