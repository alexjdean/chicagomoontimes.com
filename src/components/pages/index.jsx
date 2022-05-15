import React from 'react';
import Info from '../info'
import ArticleCard from "../ArticleCard"

let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
let month = new Date().toLocaleString('default', { month: 'long' });
let day = new Date().getDate()
let year = new Date().getFullYear();

function createCard(article) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var articleDate = new Date(article.date);

  return (
    <ArticleCard 
      title={article.title}
      date={months[articleDate.getMonth()] + ' ' + articleDate.getDate() + ', ' + articleDate.getFullYear()}
      image={article.image}
    />
  )
}

const Home = () => {
  return (
    <div
      style={{
        background: '#060930',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        display: 'flex',
        flexWrap: "wrap",
        height: '84vh',
        color: '#fff',
      }}
    >
      <div style={{
        width: '100%',
        display: 'block',
        padding: "1rem"
      }}>
        <p><i>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {dayOfWeek}, {month} {day}, {year}</i></p>
        <hr style={{marginTop: "1rem"}} />

        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}>
          {Info.map(createCard)}
        </div>
      </div>
    </div>
  );
};

export default Home;