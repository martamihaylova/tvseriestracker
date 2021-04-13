import './Home.css';
import { Component } from 'react';

import AuthContext from '../../contexts/AuthContext';
import Navigation from '../Shared/Navigation/Navigation';
import Logotext from '../Shared/Logo/LogoText';
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
        console.log(this.context);
        const currentUserId = this.context.userId;
        this.setState({ currentUserId });
        this.refreshHandler()
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
                <Navigation refresh={this.refreshHandler}/>
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
Home.contextType = AuthContext;
export default Home;