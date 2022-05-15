import React from 'react';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
    return <div>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
    </div>;
}

export default App;