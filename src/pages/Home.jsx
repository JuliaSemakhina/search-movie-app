import React from 'react';
import Main from '../components/Main';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Main />
            <SearchForm />
            <MoviesList />
            <div className='favorites container fl-jc-ai'>
                <Link to={`/favlist`} className='btn btn-list'>
          List of Favorites
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Home;
