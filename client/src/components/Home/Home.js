import './Home.css';
import { Component } from 'react';


import Navigation from '../Navigation/Navigation';
import List from '../List/List';
import Logotext from '../Logo/LogoText';
import Searchform from '../Forms/SearchForm';

import * as getService from '../../services/getSeries';

class Home extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        getService.getRandom()
            .then((series) => {
                return this.setState({ series })
            })
            .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="home-page">
                    <Navigation />
                <div className="home-logo-text">
                    <Logotext />
                </div>
                <Searchform />
                <List series={this.state.series} />
            </div>
        )
    }
}
export default Home;