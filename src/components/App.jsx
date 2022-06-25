import React from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Donate from './pages/donate'
import Footer from './Footer'
import Article from "./pages/article"
import articles from "./util/articles"
import ScrollToTop from './ScrollToTop';
import { formatDate } from './util/helper';

function createArticleRoutes(article) {
    return (<Route path={"/" + article.path}
        element={<Article
            title={article.title}
            date={formatDate(article.date)}
            image={article.image}
            content={article.content}
        />}/>);
}

function App() {
    return <div>
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            {articles.map(createArticleRoutes)}
        </Routes>
        <Footer />
    </Router>
    </div>;
}

export default App;