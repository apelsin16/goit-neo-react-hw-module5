import { useEffect, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../tmdb-api';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    const location = useLocation();
    const backLink = location.state?.from || '/';

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await fetchMovieById(movieId);
                setMovie(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMovie();
    }, [movieId]);

    return (
        <div>
            <Link to={backLink}>&larr; Go back</Link>
            <div className={css.MovieDetailsPage}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                />
                <div className={css.description}>
                    <h2>{movie.title}</h2>
                    <p>User Score {movie.vote_average}</p>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <ul className={css.genres}>
                        {movie?.genres?.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <ul className={css.nav}>
                <li>
                    <Link to="cast" state={{ from: backLink }}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: backLink }}>
                        Reviews
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
