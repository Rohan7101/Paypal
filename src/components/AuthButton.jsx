function AuthButton({signup})
{
    return(
        <div className="auth-btn">
        <button onClick={signup} className="login-btn">Login</button>
        <button onClick={signup} className="login-btn">Signup</button>
        </div>
    );
}

export default AuthButton;