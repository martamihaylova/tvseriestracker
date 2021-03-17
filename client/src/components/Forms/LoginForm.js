import './Form.css';

const Login = function () {

    return (
        <div id="loginForm">
            <h1>Login</h1>
            <form className="form-inputs" action="/login" method="POST">
                <label>Username</label>
                <input type="text" name="username" id="loginUsername" />
                <label>Email</label>
                <input type="text" name="email" id="registerEmail" />
                <label>Password</label>
                <input type="password" name="password" id="loginPassword" />
                <p>Are you new here? <a href="/register" className="register-link">Register</a> yourself!</p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;