import React, { useContext } from 'react'
import Navigation from './components/Nav/index'

import { AuthContext } from '../../context/AuthContext'

import { Title, Name, SubTitle, PrimaryButton, HeadFunctions, TableFunctions } from './styled'

const Dashboard = () => {
  const { authData } = useContext(AuthContext)
  const userName = authData[0].user.username
  return (
    <>
      <Navigation />
      <HeadFunctions>
        <Title>Goededag <Name>{userName}</Name>.</Title>
        <SubTitle>Dit is de status van uw offertes: </SubTitle>
        <PrimaryButton>Nieuwe Offerte</PrimaryButton>
      </ HeadFunctions>  
      <TableFunctions>
      </TableFunctions>  
    </>
  )
}

export default Dashboard