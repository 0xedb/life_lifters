import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <span>logo</span>
        <span>navigations</span>
      </div>
    </nav>
  );
}
