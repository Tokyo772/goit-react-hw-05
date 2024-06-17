import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../movie-api";
import Cast from "./Cast/Cast";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieCast(movieId);

        return setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {cast && <Cast casts={cast.cast} />}
      {loading && <Loader />}
      {error && <Error />}
    </div>
  );
}
