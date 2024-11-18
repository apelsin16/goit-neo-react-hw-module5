import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../tmdb-api';
import MoviesList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const queryFromParams = searchParams.get('query');
        if (!queryFromParams) return;

        async function searchMovie() {
            try {
                const data = await fetchMovieByName(queryFromParams);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }

        searchMovie();
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') return;
        setSearchParams({ query });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <MoviesList moviesList={movies} />
        </div>
    );
};

export default MoviesPage;
