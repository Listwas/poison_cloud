import styles from "./UserList.module.css";

function UserList() {
  return (
    <>
      <div className={styles.user_list_container}>
        <h1>users: </h1>
        <div className={styles.list_style}>
          <ul>
            <li>sad</li>
            <li>sa</li>
            <li>sad</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserList;
