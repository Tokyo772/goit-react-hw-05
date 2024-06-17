import styles from "./Error.module.css";
export default function Error() {
  return (
    <>
      <p className={styles.error}>
        Oops, something went wrong. Please try reloading the page❗️
      </p>
    </>
  );
}
