import React from 'react';
import Card from "../Card"
import { Link } from 'react-router-dom';
import {formatDate, headerDate} from '../util/helper';
import './index.css';

function createCard(article) {
  return (<>
      <Link style={{color : "white"}} to={"/" + article.path}>
        <Card 
          title={article.title}
          date={formatDate(article.date)}
          image={article.image}
          spotlight={article.spotlight}
        />
      </Link>
  </>);
}

const Home = ({ articles }) => {
  const sortedArticles = articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <div className='page-format'>
      <div className='header-format'>
        <div className='preamble-container'>
          <p className='preamble'>The Hardest-Working A.I. Paper in America</p>
          <p>{headerDate()}</p>
          <hr style={{marginTop: "1rem"}} />
        </div>
      </div>
        <div className='spotlight-map'>
          {sortedArticles.slice(0, 1).map(createCard)}
        </div>

        <div className='map'>
          {sortedArticles.slice(1).map(createCard)}
        </div>
    </div>
  );
};

export default Home;