import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Footer from './Footer'
import Article from "./pages/article"
import ScrollToTop from './ScrollToTop';
import { formatDate } from './util/helper';

function createArticleRoutes(article) {
    return (<Route path={article.path}
        element={<Article
            title={article.title}
            date={formatDate(article.date)}
            image={article.image}
            content={article.content}
            path={article.path}
        />}/>);
}

function App() {
    const [articles, setArticles] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        async function fetchArticles() {
            const articleList = await fetch('https://chicagomoontimes.com/api/articles');
            const data = await articleList.json();
            setArticles(data);
        }

        fetchArticles();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          if (window.location.pathname === '/') {
            setScrollPosition(window.pageYOffset);
          }
        };
      
        window.addEventListener('scroll', handleScroll, { passive: true });
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <div>
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home 
                articles={articles} 
                setScrollPosition={setScrollPosition}
                scrollPosition={scrollPosition}
            />} />
            <Route path='/about' element={<About />} />
            {articles.map(createArticleRoutes)}
        </Routes>
        <Footer />
    </Router>
    </div>;
}

export default App;
