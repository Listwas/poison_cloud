import styles from "./UserList.module.css";
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.21:7708/active_users");
        const data = await response.json();
        console.log(data);
        setUsers(data.users); // Update users state with the fetched data (an array of users)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
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
