import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <section className='error-page section'>
            <Main />
            <div className='error-container container'>
                <h1>There are no results, please enter smth!</h1>
                <Link to="/" className='btn btn-primary'> back home</Link>
            </div>
            <Footer />
        </section>
    );
};

export default Error;
