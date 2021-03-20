import './Start.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Logo from '../Logo/Logo';
import Logotext from '../Logo/LogoText';

class Start extends Component {
    constructor() {
        super();
        this.state = {
            parentHover: false
        }
    }
    changeBackground() {
        this.state.parentHover ? this.setState({ parentHover: false }) : this.setState({ parentHover: true });
    }
    render() {
        return (
            <header className="App-header" id={this.state.parentHover ? "background2" : "background1"} >
                <Link to="/guest" onMouseOver={this.changeBackground.bind(this)} onMouseOut={this.changeBackground.bind(this)}><Logo /></Link>
                <div className="start-logo-text">
                    <Logotext />
                </div>
            </header>
        )
    }
}
export default Start;