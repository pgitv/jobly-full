import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//import './Routes.css';
import Home from './Home.js';
import Companies from './Companies.js';
import Login from './Login.js';
import Company from './Company.js';
import Jobs from './Jobs.js';
import Profile from './Profile.js';
import NotFound from './NotFound.js';
import Search from './Search.js';
import Logout from './Logout.js';

class ProtectedRoute extends Component {
  render() {
    if (this.props.logged_in) {
      return <Redirect to="/login" />;
    } else
      return (
        <Switch>
          <Route
            {...this.props}
            exact
            path="./:companyOrJob"
            render={props => <Search {...props} />}
          />
          <Route
            {...this.props}
            exact
            path="/companies"
            render={() => <Companies />}
          />
          <Route
            {...this.props}
            exact
            path="/companies/:company"
            render={routeProps => <Company {...routeProps} />}
          />
          <Route {...this.props} exact path="/jobs" render={() => <Jobs />} />
          <Route
            {...this.props}
            exact
            path="/profile"
            render={() => <Profile />}
          />

          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
          <Redirect to="/" />
        </Switch>
      );
  }
}

export default ProtectedRoute;
