import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
// import Contact from './pages/contact'
import Footer from './Footer'
import Article from "./pages/article"
import ScrollToTop from './ScrollToTop';
import { formatDate } from './util/helper';
import ReactGA from 'react-ga';

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
    ReactGA.initialize('G-4XQX4Z413N');
    ReactGA.pageview('/');  
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const articleList = await fetch('https://chicagomoontimes.com/articles/');
            const data = await articleList.json();
            setArticles(data);
        }

        fetchArticles();
    }, []);

    return <div>
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home articles={articles} />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            {articles.map(createArticleRoutes)}
        </Routes>
        <Footer />
    </Router>
    </div>;
}

export default App;
