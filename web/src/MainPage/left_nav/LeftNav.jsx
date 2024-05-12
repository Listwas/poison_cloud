import styles from "./LeftNav.module.css";

function LeftNav() {
  return (
    <div className={styles.left_nav}>
      <nav>
        <a href="url">my disk</a>
        <a href="url">public files</a>
        <a href="url">favourited</a>
      </nav>
    </div>
  );
}
export default LeftNav;
