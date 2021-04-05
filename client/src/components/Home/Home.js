import './Home.css';
import { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import Logotext from '../Logo/LogoText';
import Searchform from '../Forms/SearchForm';
import List from '../List/List';

import * as getService from '../../services/getSeries';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            currentUserId: '',
        }
        this.refreshHandler= this.refreshHandler.bind(this);
    }
    refreshHandler(){
        getService.getSeries()
            .then((series) => {
                return this.setState({ series })
            })
            .catch(err => console.log(err.message));
    }
    componentDidMount() {
        // const currentUser = localStorage.getItem('username');
        const currentUserId = localStorage.getItem('userId');
        if (!currentUserId) this.props.history.push('/');
        this.setState({ currentUserId });
        this.refreshHandler()
        // getService.getSeries()
        //     .then((series) => {
        //         return this.setState({ series })
        //     })
        //     .catch(err => console.log(err.message));
    }
    componentDidUpdate(prevProps, prevState) {
        let keyword = this.props.match.params.keyword;
        if (keyword === prevState.keyword) {
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
                <Navigation handler={this.refreshHandler}/>
                <div className="home-logo-text">
                    <Logotext />
                </div>
                {this.props.location.pathname === '/home/search' ? <Searchform props={this.props} /> : null}
                {this.state.series.length > 0 ? (
                    <List series={this.state.series} />
                ) : (
                    <h1>There are no shows found.</h1>
                )
                }
            </div>
        )
    }
}
export default Home;