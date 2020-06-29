import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, auth, restricted, ...rest }) => {

  return (
    <Route {...rest} render={props => (
      auth  ?
        <Redirect to="/" />
        : <Component {...props} />
    )} />
  )

}

export default PublicRoute