import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieID } from "../../../../movie-api";
import MovieDetails from "./MovieDetails/MovieDetails";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieId = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getMovieID(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieId();
  }, [movieId]);

  return (
    <>
      {movie && !loading && !error && <MovieDetails movie={movie} />}
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
}
