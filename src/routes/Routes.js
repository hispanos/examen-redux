import React from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../containers/Dashboard'
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Login from '../containers/Login';

const Routes = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <PublicRoute component={Login} exact path="/login" restricted={true} />
                    <PrivateRoute component={Dashboard} path="/" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Routes
