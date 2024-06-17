import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movie
        </NavLink>
      </nav>
    </div>
  );
}
