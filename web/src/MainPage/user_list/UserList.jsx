import styles from "./UserList.module.css";
import FetchData from "../FetchData";
function UserList() {
  return (
    <>
      <div className={styles.user_list_container}>
        <h1>users: </h1>
        <div className={styles.list_style}>
          <ul>
            <FetchData />
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserList;
