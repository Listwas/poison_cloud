import styles from "./LeftNav.module.css";

function LeftNav() {
  return (
    <>
      <div className={styles.left_list}>
        <nav>
          <a href="url">my disk</a>
          <a href="url">public files</a>
          <a href="url">favourited</a>
        </nav>
      </div>
      <div className={styles.used_space}>
        <h2>used space: 0GB/5GB</h2>
        <hr className={styles.separator}></hr>
        <br></br>
        <a href="url" className={styles.trash_can}>
          trash can
        </a>
      </div>
    </>
  );
}
export default LeftNav;
