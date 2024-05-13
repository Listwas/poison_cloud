import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { request } from "../../lib/server";

function SearchBar() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    request("GET", "/v1/user_details", (res) => {
      setUserDetails(res.username);
    });
  }, []);

  return (
    <div id={styles.centring}>
      <div className={styles.main_container}>
        <h2>
          currently poisoned: <span className={styles.user}>{userDetails}</span>
        </h2>
      </div>
      <div className={styles.search_bar}>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default SearchBar;
