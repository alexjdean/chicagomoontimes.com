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
        height: '2.5rem'
    }}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
