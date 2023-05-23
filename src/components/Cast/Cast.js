import { fetchMovieCredits } from 'service/api';
import { useEffect, useState } from 'react';
import { CastList, CastActorName, CastActorRole, CastContainer } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    async function getMovieCredits(movieId) {
      try {
        setStatus('pending');
        const data = await fetchMovieCredits(movieId);
        setCast(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    }
    getMovieCredits(movieId);
  }, [movieId]);
  return (
    <>
      {status === 'responded' && cast.length > 0 && (
        <CastList>
          {cast.map(({ character, name, profile_path, cast_id }) => {
            return (
              <li key={cast_id}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : 'https://sgen-cfdt.fr/contenu/uploads/sites/3/2016/09/question-mark-1019922_1920.jpg'
                    }
                    width="210"
                    height="300"
                    alt={name}
                  />
                  <CastContainer>
                    <CastActorName>{name} </CastActorName>
                    <CastActorRole> {character}</CastActorRole>
                  </CastContainer>
                </div>
              </li>
            );
          })}
        </CastList>
      )}
       {status === 'responded' && cast.length === 0 && (
        <h2>There is no data about the cast</h2>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Somethimg went wrong. Please try again</h2>}
    </>
  );
};
export default Cast;