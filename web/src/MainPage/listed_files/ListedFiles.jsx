import styles from "./ListedFiles.module.css";

function ListedFiles() {
  return (
    <>
      <div className={styles.main_container}>
        <h1>your files: </h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default ListedFiles;
