import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import List from './components/List';
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
          <img src={logo} className="App-logo" alt="logo" />
          <List series={this.state.series} />
        </header>
      </div>
    );
  }
}

export default App;
