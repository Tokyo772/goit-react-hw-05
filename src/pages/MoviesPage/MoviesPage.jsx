import { useSearchParams } from "react-router-dom";
import { getMovieBySearch } from "../../../movie-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movieName, setMovieName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchMovie, setSearchMovie] = useSearchParams();
  const movie = searchMovie.get("movie");

  useEffect(() => {
    if (!movie) return;
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieBySearch(movie);
        setMovieName(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueMovie = e.target.elements.movie.value.trim();
    if (valueMovie === "") return;
    setSearchMovie({ movie: valueMovie });
    setLoading(true);

    const form = e.target;
    form.reset();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" placeholder="Enter movie name" />
        <button type="submit">Submit</button>
      </form>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && movieName.length > 0 && (
        <MovieList items={movieName} />
      )}
      {!loading && !error && movie && movieName.length === 0 && (
        <span className={styles.errorSearch}>
          No movies found for your search query.
        </span>
      )}
    </div>
  );
}
