import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="navigation-box" >
                <Link to="/home" className="nav-list">Home</Link>
                <span></span>
                <Link to="/home/search" className="nav-list">Search</Link>
                <span></span>
                <Link to="/login" className="nav-list">My TV shows</Link>
                <span></span>
                {/* <Link to="/register" className="nav-list">Register</Link>
                <span></span> */}
                {/* <Link to="/account" className="nav-list">Wellcome Pesho</Link>
                <span></span> */}
                <Link to="/" className="nav-list">Logout</Link>
            </div>

        );
    }
}
export default Navigation;