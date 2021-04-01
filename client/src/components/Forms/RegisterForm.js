import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

import Notifications from '../Notifications/Notifications';
import * as userService from '../../services/userService';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { username, email, password, rePassword } = e.target;
        userService.register(username.value, email.value, password.value, rePassword.value)
            .then((res) => {
                if (res.type === 'errorBox'){
                    console.log(res);
                    return this.setState(res)
                } else {
                localStorage.userId = res._id;
                localStorage.username = res.username;
                this.props.history.push('/home');
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div id="registerForm" >
                <Notifications type={this.state.type} >{this.state.message}</Notifications>
                <h1>Register</h1>
                <form className="form-inputs" onSubmit={this.handleSubmit} >
                    <label htmlFor="registerUsername">Username</label>
                    <input type="text" name="username" id="registerUsername" />
                    <label>Email</label>
                    <input type="text" name="email" id="registerEmail" />
                    <label>Password</label>
                    <input type="password" name="password" id="registerPassword" />
                    <label>Repeat Password</label>
                    <input type="password" name="rePassword" id="registerRepeatPassword" />
                    <p>Back to <Link to="/auth/login" className="register-link">Login</Link></p>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;