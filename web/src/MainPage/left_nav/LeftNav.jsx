import styles from "./LeftNav.module.css";

function LeftNav() {
  return (
    <>
      <div className={styles.left_nav}>
        <nav>
          <a href="url">my disk</a>
          <a href="url">public files</a>
          <a href="url">favourited</a>
        </nav>
      </div>
      <div className={styles.used_space}>
        <h2>used space: </h2>
        <hr></hr>
        <br></br>
        <a href="url">trash can</a>
      </div>
    </>
  );
}
export default LeftNav;
