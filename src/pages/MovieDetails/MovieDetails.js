import { fetchMovieDetails } from 'service/api';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    getDetailsMovie(movieId);
  }, [movieId]);

  async function getDetailsMovie(movieId) {
    try {
      setStatus('pending');
      const data = await fetchMovieDetails(movieId);
      setDataMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  const { title, overview, genres, poster_path, release_date, vote_average } = dataMovie;

  return (
    <>
      {status === 'responded' && (
        <>
          <MovieInfo
            genres={genres}
            title={title}
            overview={overview}
            vote_average={vote_average}
            poster_path={poster_path}
            release_date={release_date}
          />
          <AdditionalInfo />
        </>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Somethimg went wrong. Please try again</h2>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;