import { Component } from 'react';
import './Form.css';
// import register from '../../services/register';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    handleSubmit(event) {
        console.log(event);
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div id="registerForm" >
                <h1>Register</h1>
                <form className="form-inputs" onSubmit={this.handleSubmit} action="/auth/register" method="POST">
                    <label>Username</label>
                    <input type="text" name="username" id="registerUsername" value={this.state.value} onChange={this.handleChange} />
                    <label>Email</label>
                    <input type="text" name="email" id="registerEmail" value="email" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" id="registerPassword" value={this.state.value} onChange={this.handleChange}/>
                    <label>Repeat Password</label>
                    <input type="password" name="repeatPassword" id="registerRepeatPassword" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;