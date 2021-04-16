import './Form.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Notifications from '../Notifications/Notifications';
import * as userService from '../../services/userService';

const Login = (props) => {
    const [loginMessage, setLoginMessage] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        let { username, password } = e.target;
        if (username.value === '' || password.value === '') {
            setLoginMessage({ type: 'errorBox', message: 'Invalid input' });
            return;
        }
        userService.login(username.value, password.value)
            .then((res) => {
                if (res.info?.type === 'errorBox') {
                    setLoginMessage(res.info)
                } else {
                    localStorage.userId = res._id;
                    localStorage.username = res.username;
                    props.history.push('/home');
                }
            });
    };
    return (
        <div id="loginForm" >
            <Notifications type={loginMessage.type} >{loginMessage.message}</Notifications>
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
