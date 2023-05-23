import { fetchSearchedMovies } from 'service/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesInput, MoviesBtn } from 'pages/Movies/Movies.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      getSearchedMovies(query);
    }
  }, [searchParams]);

  function onSubmit(e) {
    e.preventDefault();
    const { value } = e.target.query;
    const query = value.trim() ? { query: value } : {};
    setSearchParams(query);
  }

  async function getSearchedMovies(query) {
    try {
      setStatus('pending');
      const data = await fetchSearchedMovies(query);
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <MoviesInput type="text" name="query" placeholder="Movie name" autoComplete='off'/>
        <MoviesBtn type="submit">Search</MoviesBtn>
      </form>
      {status === 'responded' && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Somethimg went wrong. Please try again</h2>}
    </>
  );
};
export default Movies;