import './Form';

const Register = () => {
    return (
        <div id="registerForm">
            <h1>Register</h1>
            <form action="/register" method="POST">
                <label>Username</label>
                <input type="text" name="username" id="registerUsername" />
                <label>Email</label>
                <input type="text" name="email" id="registerEmail" />
                <label>Password</label>
                <input type="password" name="password" id="registerPassword" />
                <label>Repeat Password</label>
                <input type="password" name="repeatPassword" id="registerRepeatPassword" />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;