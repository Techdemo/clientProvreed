import React, { useContext } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context/AuthContext/index'

import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'

import PrivateRoute from './components/routes/PrivateRoute'
import PublicRoute from './components/routes/PublicRoute'

const Main = () => {
  const { authData } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute  component={LoginPage} auth={authData[0].login}  path="/login" exact />
        <PrivateRoute component={Dashboard} auth={authData[0].login} path="/" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Main