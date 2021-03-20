import './Guest.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import Logotext from '../Logo/LogoText';
import * as getService from '../../services/getSeries';

class Guest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: []
        }
    }
    componentDidMount() {
        console.log(this.state);
        getService.getSomeSeries()
            .then((series) => {
                return this.setState({ series })
            })
            .catch(err => console.log(err.message));
    }
    render() {
        let num = 0;
        return (
            <div className="guest-view">
                <div className="guest-logo-text">
                    <Logotext />
                </div>
                <div className="cards">
                    {this.state.series.map(x => {
                        return <Link key={x?.id} to="/home" >
                            <div className="card" id={'c' + (num = num + 1)} style={{backgroundImage: `url("${x.image?.original}")`}}>
                           
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        )
    }
}
export default Guest;