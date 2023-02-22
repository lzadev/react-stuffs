import styles from "../Planet.module.css";

export function Planet({ name }) {
  return <p className={styles.name}>{name}</p>;
}
