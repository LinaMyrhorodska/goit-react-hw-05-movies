import { fetchMovieReviews } from 'service/api';
import { useEffect, useState } from 'react';
import { ReviewList, ReviewItem, ReviewAuthor, ReviewRating, ReviewContent } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
const { useParams } = require('react-router-dom');

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function getMovieReview(movieId) {
      try {
        setStatus('pending');
        const data = await fetchMovieReviews(movieId);
        setReview(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    }
    getMovieReview(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'responded' && review.length === 0 ? (
        <h2>There are currently no reviews</h2>
      ) : (
        <ReviewList>
          {review.map(({ author, content, id, author_details: { rating } }) => {
            return (
              <ReviewItem key={id}>
                {
                  <>
                    <ReviewAuthor>{author}</ReviewAuthor>
                    <ReviewRating>Rating: {rating ? rating : 'No data'}</ReviewRating>
                    <ReviewContent>{content}</ReviewContent>
                  </>
                }
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Somethimg went wrong. Please try again</h2>}
    </>
  );
};
export default Review;