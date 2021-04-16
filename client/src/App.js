import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Start from './components/Start/Start';
import Guest from './components/Guest/Guest';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Login from './components/Forms/LoginForm';
import Register from './components/Forms/RegisterForm';
import Account from './components/Account/Account';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Start} exact />
          <Route path="/guest" component={Guest} exact />
          <Route path="/home/search/:keyword" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/details/:id" component={Details} exact/>
          <Route path="/account/:id" component={Account} />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/register" component={Register} exact />
          <Route path="*" component={Start} />
        </Switch>
      </div>
    );
  }
}

export default App;
