import React from 'react';
import ArticleCard from "../ArticleCard"
import { Link } from 'react-router-dom';
import articles from '../util/articles_db'

let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
let month = new Date().toLocaleString('default', { month: 'long' });
let day = new Date().getDate()
let year = new Date().getFullYear();

function createCard(article) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var articleDate = new Date(article.date);

  return (<>
      <Link style={{color : "white"}} to={"/" + article.path}>
        <ArticleCard 
          title={article.title}
          date={months[articleDate.getMonth()] + ' ' + articleDate.getDate() + ', ' + articleDate.getFullYear()}
          image={article.image}
          spotlight={article.spotlight}
        />
      </Link>
  </>);
}

const Home = () => {
  articles.sort(function(x, y){ return x.spotlight === true ? -1 : y.spotlight === true ? 1 : 0;});
  
  return (
    <div
      style={{
        background: '#303030',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        display: 'flex',
        flexWrap: "wrap",
        color: '#fff',
        minHeight: "82vh"
      }}
    >
      <div style={{
        width: '100%',
        display: 'block',
        padding: "1rem"
      }}>
        <p><i style={{
          fontFamily: "'BentonSans', sans-serif",
          fontWeight: "normal"
        }}>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {dayOfWeek}, {month} {day}, {year}</i></p>
        <hr style={{marginTop: "1rem"}} />

        <div style={{
          justifyContent: "center",
          display: "inline" 
        }}>

          
          {articles.map(createCard)}
        </div>
      </div>
    </div>
  );
};

export default Home;