import PropTypes from 'prop-types';
import { MovieInfoContainer, GoBackBtn, MovieInfoWrap, MovieInfoTitle, MovieInfoOverview } from './MovieInfo.styled';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const MovieInfo = ({ title, genres, poster_path, release_date, vote_average, overview }) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (<MovieInfoWrap>
    <GoBackBtn to={backLinkRef.current}>{`Go back`}</GoBackBtn>
    <MovieInfoContainer>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : 'https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/09/question-mark-1019922_1920.jpg' } alt={title} width="510" height="530"/>
      <div>
        <MovieInfoTitle>
          {title}({Number.parseInt(release_date)})
        </MovieInfoTitle>
        <p>User score: {vote_average}</p>
        <b>Overview</b>
        <MovieInfoOverview>{overview}</MovieInfoOverview>
        <b>Genres</b>
        <p>{genres && genres.map(el => el.name).join(', ')}</p>
      </div>
    </MovieInfoContainer>
    </MovieInfoWrap>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
    })
  ).isRequired
};