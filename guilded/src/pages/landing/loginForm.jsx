function LoginForm(){
    return(
        <>
        <form className="login">
            <div className="formDecoration">
                <hr />
            </div>
            <input type='email'/>
            <input type='password'/>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default LoginForm;