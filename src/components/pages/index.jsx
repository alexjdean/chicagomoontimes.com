import React from 'react';

let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
let month = new Date().toLocaleString('default', { month: 'long' });
let day = new Date().getDate()
let year = new Date().getFullYear();

const Home = () => {
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
        padding: "1rem"
      }}><i>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {dayOfWeek}, {month} {day}, {year}</i></p>
    </div>
  );
};

export default Home;