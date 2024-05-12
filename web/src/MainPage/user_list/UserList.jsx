import styles from "./UserList.module.css";

function UserList() {
  return (
    <>
      <div className={styles.user_list_container}>
        <h1>users: </h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default UserList;
