import { Component } from 'react';
import './Home.css';

import List from '../List/List';
import Logotext from '../Logo/LogoText';
// import Login from './components/Forms/LoginForm';
// import Register from './components/Forms/RegisterForm';
import * as getService from '../../services/getSeries';
// import register from './services/register';



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
                return this.setState({ parentHover: false })
            })
            .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="home-page">
                <Logotext/>
                {/* <Route path="/login" component={Login} />
                {<Route path="/register" component={Register} /> */}
                <List series={this.state.series} />
            </div>
        )
    }
}
export default Home;