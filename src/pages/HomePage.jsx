import { useEffect, useState } from "react";

import { fetchMovieTrending } from "../../movie-api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMovieTrending();
        setMovie(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, []);

  return (
    <div>
      {movie.length > 0 && !loading && !error && (
        <h1 className={styles.title}>Trending today</h1>
      )}
      {movie.length > 0 && !loading && !error && <MovieList items={movie} />}
      {loading && <Loader />}
      {error && <Error />}
    </div>
  );
};

export default HomePage;
