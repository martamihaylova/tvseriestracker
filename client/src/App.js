import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Start from './components/Start/Start';
import Home from './components/Home/Home';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     series: []
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Start} exact/>
          <Route path="/home" component={Home} exact/>    
        </Switch>
      </div>
    );
  }
}

export default App;
