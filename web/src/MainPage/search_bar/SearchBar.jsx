import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { requestGet } from "../../lib/server";
import { useCookies } from "react-cookie";
function SearchBar() {
  const [userDetails, setUserDetails] = useState([]);
  const [cookie, setCookie] = useCookies(["sessionKey"]);
  useEffect(() => {
    requestGet(
      "/v1/user_details",
      (res) => {
        setUserDetails(res.username);
      },
      cookie["sessionKey"]
    );
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
