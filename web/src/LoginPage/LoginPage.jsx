function LoginPage() {
    return (
        <>
        <div>
            <form>
                <input type="text"  id="login" value="login"/><br/>
                <input type="text"  id="passwd" value="passwd"/><br/>
                <input type="button" id="submit" value="Login" OnClick=""/>
            </form>
        </div>
        </>
    )
}

export default LoginPage;