import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Start from './components/Start/Start';
import Guest from './components/Guest/Guest';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Login from './components/Forms/LoginForm';
import Register from './components/Forms/RegisterForm';

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
          <Route path="/" component={Start} exact />
          <Route path="/guest" component={Guest} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
