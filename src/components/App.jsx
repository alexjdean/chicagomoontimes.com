import React from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Archives from './pages/archive';
import Donate from './pages/donate'
import Subscribe from './pages/subscribe'
import Footer from './Footer'

function App() {
    return <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/archives' element={<Archives />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
        <Footer />
    </Router>
    </div>;
}

export default App;