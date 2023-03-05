import React, { useState, useEffect } from 'react';
import Card from "../Card"
import { Link } from 'react-router-dom';
import getArticles from '../util/firebase'
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

const Home = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    async function fetchArticles() {
        const articleList = await getArticles();
        setArticles(articleList);
    }
    
    fetchArticles();
  }, []);

  articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    return dateB - dateA;
  });
  
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
          {articles.slice(0, 1).map(createCard)}
        </div>

        <div className='map'>
          {articles.slice(1).map(createCard)}
        </div>
    </div>
  );
};

export default Home;