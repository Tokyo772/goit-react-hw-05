import clsx from "clsx";
import Genres from "./Genres/Genres";
import VoiceActing from "./VoiceActing/VoiceActing";
import styles from "./MovieDetails.module.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import Loader from "../../../../components/Loader/Loader";

export default function MovieDetails({ movie }) {
  const toFixedRating = movie.vote_average.toFixed(2);
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  return (
    <div className={styles.movieDetailsContainer}>
      <Link to={backLinkRef.current}>Go back!</Link>
      <div className={styles.movieImage}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://i.imgur.com/ZInJynn.gif"
          }
          alt={movie.original_title}
        />
      </div>
      <div className={styles.movieInfo}>
        <h1 className={styles.title}>{movie.original_title}</h1>
        <p className={styles.tag}>{movie.tagline}</p>

        <table>
          <tbody>
            <tr>
              <th>Release Date:</th>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <th>Country:</th>
              <td>
                {movie.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </td>
            </tr>
            <tr>
              <th>Genre:</th>
              <td>
                <Genres movie={movie} />
              </td>
            </tr>
            <tr>
              <th>Runtime:</th>
              <td>{movie.runtime} min.</td>
            </tr>
            <tr>
              <th>Rating IMDb:</th>
              <td>
                {toFixedRating} ({movie.vote_count})
              </td>
            </tr>
            <tr>
              <th>Overview:</th>
              <td>
                {movie.overview ? movie.overview : <span>No overview!</span>}
              </td>
            </tr>
            <tr>
              <th>Voice Acting:</th>
              <td>
                <VoiceActing movie={movie.spoken_languages} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.navContainer}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
