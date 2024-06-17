import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

export default function MovieList({ items }) {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <ul className={styles.movieList}>
        {items.map(({ poster_path, original_title, id }) => (
          <li key={id} className={styles.movieItem}>
            <Link
              to={`/movies/${id}`}
              state={location}
              className={styles.movieLink}
            >
              <div className={styles.movieImageWrapper}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : "https://i.imgur.com/ZInJynn.gif"
                  }
                  alt={original_title}
                  className={styles.movieImage}
                />
              </div>
              <p className={styles.movieTitle}>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
