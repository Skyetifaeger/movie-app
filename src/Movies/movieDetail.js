import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const BASE_URL = "/api/movie/"
const API_KEY = "?api_key="
const IMAGE_URL = "https://image.tmdb.org/t/p/"
const BACKDROP_SIZE = "original"
const POSTER_SIZE = "original"

export function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try {
            const res = await fetch(BASE_URL + id)
            const newMovie = await res.json()
            setMovie(newMovie)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    if (!movie.title) return null

    return (
        <div>
            <img
                className="backdrop"
                src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
                alt={movie.title + " Backdrop"}
            />
            <div className="detail-details">
                <img
                    className="detail-poster"
                    src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
                    alt={movie.title + " Detail-poster"}
                />
                <div>
                    <h1>{movie.original_title}</h1>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}