import React from 'react';
import './../pages/index.css';

export function formatDate(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let articleDate = new Date(date);
    let formatted = months[articleDate.getMonth()] + ' ' + articleDate.getDate() + ', ' + articleDate.getFullYear();
    return formatted;
};

export function headerDate() {
    let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
    let month = new Date().toLocaleString('default', { month: 'long' });
    let day = new Date().getDate()
    let year = new Date().getFullYear();

    return <p className='preamble'>Today is {dayOfWeek}, {month} {day}, {year} 😊</p>;
};