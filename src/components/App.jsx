import React from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Donate from './pages/donate'
import Subscribe from './pages/subscribe'
import Footer from './Footer'
import Article from "./pages/article"
import articles from "./util/articles"

function createArticleRoutes(article) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var articleDate = new Date(article.date);

    return (<Route path={"/" + article.path}
        element={<Article
            title={article.title}
            date={months[articleDate.getMonth()] + ' ' + articleDate.getDate() + ', ' + articleDate.getFullYear()}
            image={article.image}
            content={article.content}
        />}/>);
}

function App() {
    return <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/subscribe' element={<Subscribe />} />
            {articles.map(createArticleRoutes)}
        </Routes>
        <Footer />
    </Router>
    </div>;
}

export default App;