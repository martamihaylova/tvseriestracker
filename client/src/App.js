import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';

import Start from './components/Start/Start';
import Guest from './components/Guest/Guest';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Login from './components/Forms/LoginForm';
import Register from './components/Forms/RegisterForm';
import Account from './components/Account/Account';
import AuthContext from './contexts/AuthContext';
import isAuth from './hoc/isAuth';

function App(props) {
  const user = {
    userId: localStorage.getItem('userId'),
    username: localStorage.getItem('username'),
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Start} exact />
        <Route path="/guest" component={Guest} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/auth/register" component={Register} exact />
        <AuthContext.Provider value={user}>
          <Route path="/home/search/:keyword" component={isAuth(Home)} />
          <Route path="/home" component={isAuth(Home)} />
          <Route path="/details/:id" component={isAuth(Details)} exact />
          <Route path="/account/:id" component={isAuth(Account)} />
        </AuthContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
