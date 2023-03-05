import React from "react";
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="font-details">Built With ❤️ In Chicago</p>
      <p className="font-details">Chicago Moon-Times ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
