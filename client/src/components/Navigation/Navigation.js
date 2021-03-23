import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="navigation-box">
                <Link to="/" className="nav-list">Home</Link>
                <span></span>
                <Link to="/serch" className="nav-list">Search</Link>
                <span></span>
                <Link to="/login" className="nav-list">Login</Link>
                <span></span>
                {/* <Link to="/register" className="nav-list">Register</Link>
                <span></span> */}
                <Link to="/account" className="nav-list">Pesho's TV Shows</Link>
                <span></span>
                <Link to="/logout" className="nav-list">Logout</Link>
            </div>

        );
    }
}
export default Navigation;