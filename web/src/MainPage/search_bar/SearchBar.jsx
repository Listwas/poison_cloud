import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.main_container}>
      <h2>currently poisoned: //username</h2>
      <div className={styles.Search_bar}></div>
    </div>
  );
}

export default SearchBar;
