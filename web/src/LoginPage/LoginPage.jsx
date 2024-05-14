import styles from "./LoginPage.module.css";
import RegisterPage from "../RegisterPage/RegisterPage";
import { useState, useRef } from "react";
import { requestPost } from "../lib/server";
import { useCookies } from "react-cookie";

function LoginPage({ setLoginPage }) {
  const loginRef = useRef();
  const passwdRef = useRef();
  const [showRegister, setShowRegister] = useState(false);
  const [cookies, setCookie] = useCookies(["sessionKey"]);

  if (showRegister) {
    return (
      <>
        <RegisterPage returnToLogin={() => setShowRegister(false)} />
      </>
    );
  }

  function changeShowRegister() {
    setShowRegister(true);
  }

  function loggedIn(response) {
    console.log(response);
    if (response.status == 200) {
      alert("Pomyslnie zalogowano");
      setCookie("sessionKey", response.session_key, { path: "/" });
      setLoginPage(false);
    } else {
      alert("Nie udalo sie zalogowac!");
    }
  }

  function loginUser() {
    const passwd = passwdRef.current.value;
    const login = loginRef.current.value;
    requestPost(
      "/v1/user/login",
      { username: login, passwd: passwd },
      loggedIn
    );
  }

  return (
    <>
      <div className={styles.contLogin}>
        <form
          className={styles.logForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className={styles.logH2}>
            <b>Login</b>
          </h2>
          <br />
          <input
            type="text"
            className={styles.logInput}
            id="login"
            ref={loginRef}
            placeholder="Login"
          />
          <br />
          <input
            type="password"
            className={styles.logInput}
            id="passwd"
            ref={passwdRef}
            placeholder="Passwd"
          />
          <br />
          <input
            type="button"
            className={styles.logInput}
            id="reg"
            value="Register"
            onClick={changeShowRegister}
          />
          <input
            type="submit"
            className={styles.logInput}
            id="submit"
            value="Login"
            onClick={loginUser}
          />
        </form>
      </div>
    </>
  );
}

export default LoginPage;
