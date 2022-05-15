import React from 'react';

const About = () => {
  return (
    <div
      style={{
        background: '#060930',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        display: 'flex',
        height: '84vh',
        color: '#fff'
      }}
    >
      <p style={{
        textAlign: "left",
        padding: "5% 10%",
        fontSize: "2rem"
      }}>The Chicago Moon-Times was founded and created on April 27, 2022 by a (very bored) 20-year old h4cker programmer. 
      Everything on the site is satire. Please don't sue me!</p>
    </div>
  );
};

export default About;