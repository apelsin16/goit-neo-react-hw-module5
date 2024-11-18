import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../tmdb-api';

const MovieCast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        async function fetchCredits() {
            try {
                const data = await fetchMovieCredits(movieId);
                setCast(data.cast);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCredits();
    }, [movieId]);

    return (
        <ul>
            {cast.length > 0 &&
                cast.map((person) => {
                    return (
                        <li key={person.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                                alt={person.name}
                            />
                            <p>{person.name}</p>
                            <p>Character: {person.character}</p>
                        </li>
                    );
                })}
        </ul>
    );
};

export default MovieCast;
