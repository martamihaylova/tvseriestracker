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
            series: [],
            keyword: ''
        }
    }

    componentDidMount() {
        getService.getSeries()
            .then((series) => {
                return this.setState({ series })
            })
            .catch(err => console.log(err.message));
    }
    componentDidUpdate(prevProps, prevState) {
        let keyword = this.props.match.params.keyword;
        if (keyword === prevState.keyword) {
            console.log(prevState.keyword);
            return;
        }
        getService.getSeries(keyword)
            .then((series) => {
                return this.setState({ series, keyword })
            })
            .catch(err => console.log(err.message));
    }

    render() {
        // console.log(this.state);
        return (
            <div className="home-page">
                <Navigation />
                <div className="home-logo-text">
                    <Logotext />
                </div>
                {this.props.location.pathname === '/home/search' ? <Searchform props={this.props} /> : null}
                <List series={this.state.series} />
            </div>
        )
    }
}
export default Home;