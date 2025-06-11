import React from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { v4 as uuidv4 } from 'uuid';


const MoviesList = () => {
    const { movies, loading } = useGlobalContext();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (loading) {
        // eslint-disable-next-line semi
        return <Loading />
    }
    return (
        <>
            {movies ?
                <div className="slider-container">
                    <Slider {...settings} >
                        {movies.map((item) => {
                            if (item.Poster === "N/A") return null;
                            return <Movie key={uuidv4()} {...item} />;
                        }
                        )}
                    </Slider>
                </div>
                : null}
        </>
    );
};

export default MoviesList;