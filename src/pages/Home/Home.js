import { fetchTrendingMovies } from 'service/api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { HomeHeading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    getTrendingMovies();
  }, []);

  async function getTrendingMovies() {
    try {
      setStatus('pending');
      const data = await fetchTrendingMovies();
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  return (
    <>
      <HomeHeading>Trending Today</HomeHeading>
      {status === 'responded' && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Somethimg went wrong. Please try again</h2>}
    </>
  );
};

export default Home;