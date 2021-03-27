import './Form.css';
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';

const Login = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let { username, password } = e.target;
        userService.login(username.value, password.value)
            .then((res) => {
                console.log(res);
                // props.history.push('/home');
            })
            .catch((err) => console.log(err.message));

    };
    return (
        <div id="loginForm" >
            <h1>Login</h1>
            <form className="form-inputs" onSubmit={handleSubmit} >
                <label htmlFor="loginUsername">Username</label>
                <input type="text" name="username" id="loginUsername" />
                <label>Password</label>
                <input type="password" name="password" id="loginPassword" />
                <p>Are you new here? <Link to="/auth/register" className="register-link">Register</Link> yourself!</p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
