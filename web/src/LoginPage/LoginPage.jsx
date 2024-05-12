import styles from "./LoginPage.module.css";
import RegisterPage from "../RegisterPage/RegisterPage"
import { useState, useRef } from "react";

function LoginPage() {
    const [showRegister, setShowRegister] = useState(false);

    if (showRegister) {
        return (
            <>
                <RegisterPage returnToLogin={() => setShowRegister(false)} />
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
                <input type="text" className={styles.logInput} id="login" placeholder="Login"/><br/>
                <input type="password" className={styles.logInput}  id="passwd" placeholder="Passwd"/><br/>
                <input type="button" className={styles.logInput} id="submit" value="Register" onClick={changeShowRegister}/>
                <input type="button" className={styles.logInput} id="submit" value="Login" onClick=""/>
            </form>
        </div>
        </>
    ) ;
}

export default LoginPage;