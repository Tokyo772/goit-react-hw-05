import { InfinitySpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
