import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, MovieName, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(movie => (
        <MovieName key={movie.id}>
          <StyledLink style={{color: 'black'}} to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </StyledLink>
        </MovieName>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};