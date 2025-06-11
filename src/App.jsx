import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleMovie from './pages/SingleMovie';
import Error from './pages/Error';
import FavList from './pages/FavList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
    return (
        <Router >
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='movie/:imdbID' element={<SingleMovie />} />
                <Route path='*' element={<Error />} />
                <Route path='favlist' element={<FavList />} />
            </Routes>
        </Router>
    );
}

export default App;