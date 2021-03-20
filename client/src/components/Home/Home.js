import { Component } from 'react';
import './Home.css';

import Navigation from '../Navigation/Navigation';
import List from '../List/List';
import Logotext from '../Logo/LogoText';
// import Login from './components/Forms/LoginForm';
// import Register from './components/Forms/RegisterForm';
// import register from './services/register';
import * as getService from '../../services/getSeries';



class Home extends Component {
    constructor(props) {
        super(props);
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
        return (
            // <Fragment>
                <div className="home-page">
                   <Navigation />
                    <div className="home-logo-text">
                        <Logotext />
                    </div>
                    {/* <Route path="/login" component={Login} />
                {<Route path="/register" component={Register} /> */}
                    <List series={this.state.series} />
                </div>
            // </Fragment>
        )
    }
}
export default Home;