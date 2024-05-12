import styles from "./RegisterPage.module.css";
import { useState, useRef } from "react";

function RegisterPage({ returnToLogin }) {
    const nameRef = useRef();
    const loginRef = useRef();
    const passwdRef = useRef();
    const passwdChkRef = useRef();

    const handleSubmit = () => {
        if (passwdRef.current.value != passwdChkRef.current.value) {
            alert('Podane hasla nie sa takie same!')
            return
        }

        //TODO: request to a server
        
        alert('pomyslnie utworzono uzytkownika')
        returnToLogin()       
    };

    return (
        <>
        <div className={styles.contReg}>
            <form className={styles.regForm}>
                <h2 className={styles.logH2}><b>Register</b></h2><br/>
                <input type="text" className={styles.logInput} id="name" ref={nameRef} placeholder="Name"/><br/>
                <input type="text" className={styles.logInput} id="login" ref={loginRef} placeholder="Login"/><br/>
                <input type="password" className={styles.logInput} id="passwd" ref={passwdRef} placeholder="Password"/><br/>
                <input type="password" className={styles.logInput} id="passwdChk" ref={passwdChkRef} placeholder="Repeat Password"/><br/>
                <input type="button" className={styles.logInput} id="return" value="go to login" onClick={returnToLogin}/>
                <input type="button" className={styles.logInput} id="submit" value="Register" onClick={handleSubmit}/>
            </form>
        </div>
        </>
    ) ;
}

export default RegisterPage;