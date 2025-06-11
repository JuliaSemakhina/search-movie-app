import React from 'react';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { loading, getMovies, setSearchTerm } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies();
    };

    if (loading) {
        // eslint-disable-next-line semi
        return <Loading />
    }
    return (
        <form className='input-section container'>
            <div className='input_content fl-jc-ai'>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter the movie, e.g. "Titanic"'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='btn' type='submit' onClick={(e) => handleSubmit(e)}>
          Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;

