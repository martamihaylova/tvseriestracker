import './Home.css';
import { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import List from '../List/List';
import Logotext from '../Logo/LogoText';
import Searchform from '../Forms/SearchForm';

import * as getService from '../../services/getSeries';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
        }
        this.message = 'Loading...';
    }
    componentDidMount() {
      
        // const currentUser = localStorage.getItem('username');
        const currentUserId = localStorage.getItem('userId');
        if (!currentUserId) this.props.history.push('/');

        getService.getSeries()
            .then((series) => {
                return this.setState({ series })
            })
            .catch(err => console.log(err.message));
    }
    componentDidUpdate(prevProps, prevState) {
        let keyword = this.props.match.params.keyword;
        if (keyword === prevState.keyword || keyword === '' || !keyword) {
            return;
        }
        getService.getSeries(keyword)
            .then((series) => {
                return this.setState({ series, keyword })
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
                {this.props.location.pathname === '/home/search' ? <Searchform props={this.props} /> : null}
                <List series={this.state.series} />
            </div>
        )
    }
}
export default Home;