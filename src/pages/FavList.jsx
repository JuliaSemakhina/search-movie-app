import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { v4 as uuidv4 } from 'uuid';

const FavList = () => {
    const { favorites, setFavorites } = useGlobalContext();
    const [filter, setFilter] = useState('All');

    const filteredFavs = favorites.filter(favor =>
        filter === "movies" ? favor.Type === "movie" :
            filter === "series" ? favor.Type === "series" :
                true
    );

    const deleteFavorite = (item) => {
        const newFavorites = favorites.filter((favorite) => favorite.imdbID !== item.imdbID);
        setFavorites(newFavorites);
    };

    useEffect(() => {
        localStorage.setItem("Fav", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <div className='container fav fl-jc-ai' >
            <Link className=' btn link-button' to="/">
        back home
            </Link>
            <div className='container filter'>
                <button className='btn' onClick={() => setFilter('All')}>All</button>
                <button className='btn' onClick={() => setFilter('movies')}>Movies</button>
                <button className='btn' onClick={() => setFilter('series')}>Series</button>
            </div>
            <div className='fav-list'>
                {filteredFavs.map((fav) => {
                    return (
                        <div key={uuidv4()} className='fav-movie'>
                            <div>
                                <Link to={`/movie/${fav.imdbID}`}>
                                    {fav.Title}
                                </Link>
                            </div>
                            <div>
                                <img src={fav.Poster} alt='poster' />
                                <button className='btn' onClick={() => deleteFavorite({ ...fav })}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FavList;