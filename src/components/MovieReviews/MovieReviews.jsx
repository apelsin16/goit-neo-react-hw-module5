import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../tmdb-api';

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        async function fetchReviews() {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data.results);
            } catch (err) {
                console.log(err);
            }
        }

        fetchReviews();
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(({ id, author, content, created_at }) => {
                        const formatDateIntl = (dateString) => {
                            const date = new Date(dateString);
                            return new Intl.DateTimeFormat('uk-UA', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false,
                            })
                                .format(date)
                                .replace(',', '');
                        };

                        const formattedDateIntl = formatDateIntl(created_at);
                        return (
                            <li key={id}>
                                <h5>{author}</h5>
                                <p>{content}</p>
                                <time dateTime={created_at}>
                                    {formattedDateIntl}
                                </time>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div>We don`t have any reviews for this movie</div>
            )}
        </div>
    );
};

export default MovieReviews;
