import React, { useContext } from 'react'
import Navigation from './components/Nav/index'

import { AuthContext } from '../../context/AuthContext'

import { Header } from './components';

const Dashboard = () => {
  const { authData } = useContext(AuthContext)
  const userName = authData[0].user.username

  return (
    <>
      <Navigation />
      <Header name={userName} />
    </>
  )
}

export default Dashboard