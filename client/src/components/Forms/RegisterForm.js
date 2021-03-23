import { Component } from 'react';
import './Form.css';
// import register from '../../services/register';

class Register extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    
    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.username.value);
     
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
                    <input type="password" name="repeatPassword" id="registerRepeatPassword" />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;