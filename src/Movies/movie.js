import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export function Movie({ movie, config }) {
    return (
        <li>
            <Link to ={`/movie/${movie.id}`}>
                {config.images?.base_url && (
                    <img
                        src={config.images.base_url + "original" + movie.poster_path}
                        alt={movie.title + "Poster"}
                    />
                )}
            </Link>
        </li>
    );
}

//Yo, for React Frameworks it was just an intro to different sites

Movie.propType = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    })
}