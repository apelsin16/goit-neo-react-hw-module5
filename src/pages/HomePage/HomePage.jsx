import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../tmdb-api';
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
    const [trandingMovies, setTrandingMovies] = useState([]);
    useEffect(() => {
        fetchTrendingMovies()
            .then((response) => {
                setTrandingMovies(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <MovieList moviesList={trandingMovies} />
        </div>
    );
};

export default Home;
