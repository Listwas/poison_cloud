import styles from "./LoginPage.module.css";
import RegisterPage from "../RegisterPage/RegisterPage"
import { useState, useRef } from "react";

function LoginPage() {
    const [showRegister, setShowRegister] = useState(false);

    if (showRegister) {
        return (
            <>
                <RegisterPage />
            </>
        );
    }

    const changeShowRegister = () => {
        setShowRegister(true);
    };

    return (
        <>
        <div className={styles.contLogin}>
            <form className={styles.logForm}>
                <h2 className={styles.logH2}><b>Login</b></h2><br/>
                <input type="text" className={styles.logInput} id="login" placeholder="login"/><br/>
                <input type="text" className={styles.logInput}  id="passwd" placeholder="passwd"/><br/>
                <input type="button" className={styles.logInput} id="submit" value="Register" onClick={changeShowRegister}/>
                <input type="button" className={styles.logInput} id="submit" value="Login" onClick={changeShowRegister}/>
            </form>
        </div>
        </>
    ) ;
}

export default LoginPage;