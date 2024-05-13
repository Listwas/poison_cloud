import styles from "./UserList.module.css";
import { useEffect, useState } from "react";
import { requestGet } from "../../lib/server";
import { useCookies } from "react-cookie";

function UserList() {
  const [users, setUsers] = useState([]);
  const [cookie, setCookie] = useCookies(["sessionKey"]);

  useEffect(() => {
    requestGet(
      "/v1/active_users",
      (res) => {
        setUsers(res.users);
      },
      cookie["sessionKey"]
    );
  }, []);
  let userlist = users;
  if (userlist === undefined) {
    userlist = [];
  }

  return (
    <>
      <div className={styles.user_list_container}>
        <h1>users: </h1>
        <div className={styles.list_style}>
          <ul>
            {userlist.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserList;
