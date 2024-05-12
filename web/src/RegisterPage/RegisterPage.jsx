import styles from "./RegisterPage.module.css";
import { useState, useRef } from "react";

function RegisterPage({ returnToLogin }) {
    const register = () => {

        returnToLogin();
    };


    return (
        <>
        <div className={styles.contReg}>
            <form className={styles.regForm}>
                <h2 className={styles.logH2}><b>Register</b></h2><br/>
                <input type="text" className={styles.logInput} id="name" placeholder="Name"/><br/>
                <input type="text" className={styles.logInput} id="surname" placeholder="Surname"/><br/>
                <input type="text" className={styles.logInput} id="login" placeholder="Login"/><br/>
                <input type="text" className={styles.logInput} id="passwd" placeholder="Password"/><br/>
                <input type="button" className={styles.logInput} id="submit" value="go to login" onClick={returnToLogin}/>
                <input type="button" className={styles.logInput} id="submit" value="Register" onClick={register}/>
            </form>
        </div>
        </>
    ) ;
}

export default RegisterPage;