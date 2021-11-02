import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reservations from './components/Reservations/Reservations';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import Home from './components/Home/Home';
import Logout from './components/Logout/Logout';
import { successFullLogin } from './features/userSlice';
import './style.css';

const App = () => {
  const isUserLoggedIn = useSelector(successFullLogin);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home loggedIn={isUserLoggedIn} />
        </Route>
        <Route path="/logout" component={Logout} exact />
      </Switch>

      {isUserLoggedIn ? (
        <>
          <Header />
          <div className="homeContainer">
            <Sidenav />
            <Switch>
              <Route path="/reservations" component={Reservations} />
              <Route path="/orders" component={Orders} />
            </Switch>
          </div>
        </>
      ) : (
        <>
          <Redirect to="/" />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
