import styles from "./Cast.module.css";

export default function Cast({ casts }) {
  return (
    <div className={styles.container}>
      {casts.map(({ id, profile_path, name, character }) => (
        <div key={id} className={styles.castItem}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://i.imgur.com/ZInJynn.gif`
              }
              alt={name}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.name}>{name}</p>
            <span className={styles.character}>{character}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
