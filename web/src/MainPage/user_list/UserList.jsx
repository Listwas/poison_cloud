import styles from "./UserList.module.css";
import { useEffect, useState } from "react";
import { request } from "../../lib/server";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        request("GET", "/v1/active_users", (res) => {
            setUsers(res.users);
        });
    }, []);

  return (
    <>
      <div className={styles.user_list_container}>
        <h1>users: </h1>
        <div className={styles.list_style}>
          <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserList;
