import styles from"./RegisterPage.css";

function RegisterPage() {
    return (
        <>
        <div>
            <form className={styles.contLogin}>
                <h2 className={styles.logH2}><b>Register</b></h2><br/>
                <input type="text" className={styles.logInput} id="name" placeholder="Name"/><br/>
                <input type="text" className={styles.logInput} id="surname" placeholder="Surname"/><br/>
                <input type="text" className={styles.logInput} id="login" placeholder="Login"/><br/>
                <input type="text" className={styles.logInput} id="passwd" placeholder="Password"/><br/>
                <input type="button" className={styles.logInput} id="submit" value="Register" OnClick=""/>
            </form>
        </div>
        </>
    )
}

export default RegisterPage;