import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import isLogged from '../utils/isLogged';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

    return (
        <Route {...rest} render= {props => (
            isLogged() && restricted ? 
            <Redirect to="/" />
            : <Component {...props} />
        )}

        />
    )
}

export default PublicRoute
