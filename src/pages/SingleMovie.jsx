import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { IoMdArrowDropdown } from "react-icons/io";

const SingleMovie = () => {
    const { imdbID } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    React.useEffect(() => {
        setLoading(true);
        async function getMovie() {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=b9ef5e50&&plot=full&i=${imdbID}`);
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        getMovie();
    }, [imdbID]);

    if (loading) {
        // eslint-disable-next-line semi
        <Loading />
    }
    if (!movie) {
        return (
            <div className='container'>
                <h2 className='section-title'>no data to display</h2>
            </div>
        );
    }
    const { Title, Year, Runtime, Genre, Director, Plot, Actors, Country, Poster, Rated, BoxOffice, imdbRating } = movie;
  
    const starExample = {
        count: 10,
        size: 30,
        edit: false,
        isHalf: true
    };

    return (
        <section className='single-movie fl-jc-ai'>
            <div className='movie-title'>
                <h2>{Title}</h2>
            </div>
            <div className='movie'>
                <img src={Poster} className='movie-img' alt={Title} />
                <div className='movie-info'>
                    <div>
                        <span className='movie-data'>Title: </span>
                        {Title}
                    </div>
                    <div>
                        <span className='movie-data'>Genre: </span>
                        {Genre}
                    </div>
                    <div>
                        <span className='movie-data'>Plot: </span>
                        <details>
                            <summary>Details <span><IoMdArrowDropdown className='arrow' /></span></summary>
                            <p>
                                {Plot}
                            </p>
                        </details>

                    </div>
                    <div>
                        <span className='movie-data'>Director: </span>
                        {Director}
                    </div>
                    <div>
                        <span className='movie-data'>Actors: </span>
                        {Actors}
                    </div>
                    <div>
                        <span className='movie-data'>Country: </span>
                        {Country}
                    </div>
                    <div>
                        <span className='movie-data'>Director: </span>
                        {Director}
                    </div>
                    <div>
                        <span className='movie-data'>Year: </span>
                        {Year}
                    </div>
                    <div>
                        <span className='movie-data'>Runtime: </span>
                        {Runtime}
                    </div>
                    <div>
                        <span className='movie-data'>Rated: </span>
                        {Rated}
                    </div>
                    <div>
                        <span className='movie-data'>Box Office: </span>
                        {BoxOffice}
                    </div>
                    <div><span className='movie-data'>IMDB Rating: </span>
                        {imdbRating}

                    </div>
                    {imdbRating !== "N/A"
                        ?
                        <ReactStars
                            {...starExample}
                            value={parseFloat(imdbRating)}
                        />
                        : null
                    }
                </div>
            </div>
            <Link className=' btn link-button' to="/">
        back home
            </Link>
        </section>
    );
};

export default SingleMovie;
