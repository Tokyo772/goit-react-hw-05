import styles from "./Reviews.module.css";
export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviewContainer}>
      {reviews.map(
        ({
          author,
          id,
          author_details: { avatar_path, rating = "no rating" },
          content,
          created_at,
          url,
        }) => {
          const displayRating = rating !== null ? rating : "No rating!";
          return (
            <div className={styles.reviewItem} key={id}>
              <div className={styles.authorInfo}>
                <img
                  className={styles.avatar}
                  src={
                    avatar_path
                      ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                      : "https://i.imgur.com/ZInJynn.gif"
                  }
                  alt={`${author}'s avatar`}
                />
                <div>
                  <h3 className={styles.author}>{author}</h3>
                  <p className={styles.rating}>Rating: {displayRating}</p>
                </div>
              </div>
              <p className={styles.date}>
                {new Date(created_at).toLocaleDateString()}
              </p>
              <p className={styles.content}>{content}</p>
              <a
                href={url}
                className={styles.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read full review
              </a>
            </div>
          );
        }
      )}
    </div>
  );
}
