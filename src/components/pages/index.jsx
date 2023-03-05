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

  articles.sort(function(x, y){ return x.spotlight === true ? -1 : y.spotlight === true ? 1 : 0;});
  
  return (
    <div className='page-format'>
      <div className='header-format'>
        <p><i className='intro'>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {headerDate()}</i></p>
        <hr style={{marginTop: "1rem"}} />
        
        <div className='map'>
          {articles.map(createCard)}
        </div>
      </div>
    </div>
  );
};

export default Home;