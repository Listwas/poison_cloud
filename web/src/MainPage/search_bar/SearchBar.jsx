import styles from "./SearchBar.module.css";

function SearchBar() {
  var username = "user";
  return (
    <div id={styles.centring}>
      <div className={styles.main_container}>
        <h2>
          currently poisoned: <span className={styles.user}>{username}</span>
        </h2>
      </div>
      <div className={styles.search_bar}>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default SearchBar;
