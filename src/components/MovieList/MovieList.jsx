import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ moviesList }) => {
    const location = useLocation();

    return (
        <ul>
            {moviesList &&
                moviesList.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link
                                to={'/movies/' + movie.id}
                                state={{
                                    from: location.pathname + location.search,
                                }}
                            >
                                {movie.title}
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

MovieList.propTypes = {
    moviesList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
        })
    ),
};

export default MovieList;
