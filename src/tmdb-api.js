import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const fetchTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?language=en-US`;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_KEY}`,
            accept: 'application/json',
        },
    };

    const response = await axios.get(url, options);
    return response.data;
};

export const fetchMovieById = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_KEY}`,
            accept: 'application/json',
        },
    };

    const response = await axios.get(url, options);
    return response.data;
};

export const fetchMovieCredits = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_KEY}`,
            accept: 'application/json',
        },
    };

    const response = await axios.get(url, options);
    return response.data;
};

export const fetchMovieReviews = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_KEY}`,
            accept: 'application/json',
        },
    };

    const response = await axios.get(url, options);
    return response.data;
};

export const fetchMovieByName = async (queryString) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${queryString}&include_adult=false&language=en-US&page=1`;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_KEY}`,
            accept: 'application/json',
        },
    };

    const response = await axios.get(url, options);
    return response.data;
};
