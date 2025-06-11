import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from "react-icons/ai";
import { useGlobalContext } from '../context';

const Movie = ({ Title, Poster, imdbID, Year, Type }) => {
    const { favorites, setFavorites } = useGlobalContext();

    const addFavorite = (item) => {
    //Updating the list
        const updatedList = [...favorites, item];
        //Deleting duplicates and returning filtered list
        const by_id = {};
        for (item of updatedList) by_id[item.imdbID] = item;

        const uniques = Object.values(by_id);
        setFavorites(uniques);
    };
    // saveToLocalStorage;
    React.useEffect(() => {
        localStorage.setItem("Fav", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <article className='my-slide'>
            <div className='img-container'>
                <img src={Poster} alt={Title} />
                <button className='favorite-btn' onClick={(e) => addFavorite({ Title, Year, Poster, imdbID, Type })}
                >
                    <AiFillHeart />
                </button>
            </div>
            <div className='movie-footer'>
                <h3>{Title}</h3>
                <h2>{Year}</h2>
                <div className='movie-btns'>
                    <Link to={`/movie/${imdbID}`} className='btn btn-primary btn-details'>
            details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Movie;
