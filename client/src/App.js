import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import List from './components/Guests/List';
import Login from './components/Forms/LoginForm';
import Register from './components/Forms/RegisterForm';
import * as getService from './services/getSeries';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }
  componentDidMount() {
    getService.getSomeSeries()
      .then((series) => {
        return this.setState({ series })
      })
      .catch(err => console.log(err.message));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img  src={logo} className="App-logo" alt="logo" /></a>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <List series={this.state.series} />
        </header>
      </div>
    );
  }
}

export default App;
