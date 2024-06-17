import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../../movie-api";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Reviews from "./Reviews/Reviews";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieReviews(movieId);
        return setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {!loading && !error && reviews && reviews.results.length > 0 && (
        <Reviews reviews={reviews.results} />
      )}
      {!loading && !error && reviews && reviews.results.length === 0 && (
        <p>No reviews available.</p>
      )}
      {loading && <Loader />}
      {error && <Error />}
    </div>
  );
}
