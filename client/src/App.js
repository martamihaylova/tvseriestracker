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
          <Route path="/home/search/:keyword" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/register" component={Register} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
