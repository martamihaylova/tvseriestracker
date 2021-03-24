import './Form.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        
    };
    return (
        <div id="loginForm">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="form-inputs">
                <label htmlFor="loginUsername">Username</label>
                <input type="text" name="username" id="loginUsername" />
                <label htmlFor="registerEmail">Email</label>
                <input type="text" name="email" id="registerEmail" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="loginPassword" />
                <p>Are you new here? <Link to="/home" className="register-link">Register</Link> yourself!</p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;