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
        console.log(this.props);
        return (
            <div className="navigation-box" >
                <Link to="/home" className="nav-list">Home</Link>
                <span></span>
                <Link to="/home/search" className="nav-list">Search titles</Link>
                <span></span>
                {this.props.currentlocation === "account" ?
                    (
                        <Link to={`/account/${this.currentUserId}`} className="nav-list">Sort by name</Link>
                        
                    ) : (
                        <Link to="/home" className="nav-list" onClick={this.props.handler} >Reload random</Link>
                    )
                }
                <span></span>
                <Link to={`/account/${this.currentUserId}`} className="nav-list">{this.currentUser}`s TV shows</Link>
                <span></span>
                <Link to="/" onClick={userService.logout} className="nav-list">Logout</Link>
            </div>

        );
    }
}
export default Navigation;