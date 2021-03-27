import { Component } from 'react';
import './Form.css';
import * as userService from '../../services/userService';

class Register extends Component {
    constructor(props) {
        super(props);
        //     this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { username, email, password, rePassword } = e.target;
        userService.register(username.value, email.value, password.value, rePassword.value)
            .then((res) => {
                console.log(res);
                this.props.history.push('/auth/login');
            })
            .catch((err) => console.log(err.message));
    }
    render() {
        return (
            <div id="registerForm" >
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
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;