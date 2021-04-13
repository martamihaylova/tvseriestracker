import './Navigation.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../contexts/AuthContext';
import * as userService from '../../../services/userService';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation-box" >
                <Link to="/home" className="nav-list">Home</Link>
                <span></span>
                <Link to="/home/search" className="nav-list">Search titles</Link>
                <span></span>
                {this.props.currentlocation === "account" ?
                    (
                        <Link to={`/account/${this.context.userId}/sort`} className="nav-list" hello="hello">Sort by name</Link>
                        
                    ) : (
                        <Link to="/home" className="nav-list" onClick={this.props.refresh} >Reload random</Link>
                    )
                }
                <span></span>
                <Link to={`/account/${this.context.userId}`} className="nav-list">{this.context.username}`s TV shows</Link>
                <span></span>
                <Link to="/" onClick={userService.logout} className="nav-list">Logout</Link>
            </div>

        );
    }
}
Navigation.contextType = AuthContext;
export default Navigation;