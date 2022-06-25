import React from "react";
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="font-details">Thoughts? Opinions? Story suggestions? Send them all to moontimeletters@gmail.com</p>
      <p className="font-details">Chicago Moon-Times ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
