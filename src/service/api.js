import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '24c3fa576b56c1ede1ee09fa40587227';

export async function fetchTrendingMovies() {
    const r = await axios.get(`trending/movie/day?api_key=${KEY}`);
    return r.data.results;
};

export async function fetchSearchedMovies(query) {
    const r = await axios.get(`search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}&include_adult=false`);
    return r.data.results;
};

export async function fetchMovieDetails(movieId) {
    const r = await axios.get(`movie/${movieId}?api_key=${KEY}&language=en-US`);
    return r.data;
};

export async function fetchMovieCredits(movieId) {
    const r = await axios.get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    return r.data.cast;
};

export async function fetchMovieReviews(movieId) {
    const r = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
    return r.data.results;
};