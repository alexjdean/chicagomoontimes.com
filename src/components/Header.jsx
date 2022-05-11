import React from 'react';

function Header() {
    let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
    let month = new Date().toLocaleString('default', { month: 'long' });
    let day = new Date().getDate()
    let year = new Date().getFullYear();

    return (<div>
        <p>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {dayOfWeek}, {month} {day}, {year}</p>
        <h1>CHICAGO MOON TIMES</h1>
        <p>Donate!</p>
    </div>);
}

export default Header;