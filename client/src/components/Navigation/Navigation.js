import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import * as userService from '../../services/userService';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.currentUser = localStorage.getItem('username');
        this.currentUserId = localStorage.getItem('userId');
    }
    
    render() {
        return (
            <div className="navigation-box" >
                <Link to="/home" className="nav-list">Home</Link>
                <span></span>
                <Link to="/home/search" className="nav-list">Search</Link>
                <span></span>
                <Link to={`/account/${this.currentUserId}`} className="nav-list">{this.currentUser}`s TV shows</Link>
                <span></span>
                {/* <Link to="/register" className="nav-list">Register</Link>
                <span></span> */}
                {/* <Link to="/account" className="nav-list">Wellcome Pesho</Link>
                <span></span> */}
                <Link to="/" onClick={userService.logout} className="nav-list">Logout</Link>
            </div>

        );
    }
}
export default Navigation;