import React from 'react';

import { HeaderContainer, Title, Name, Subtitle, NotificationContainer } from './styled';
import { NewResponses, AcceptedResponses, OpenResponses } from './components';
import { PrimaryButton } from '../../../../components/Buttons'

const Header = ({name}) => {
  return (
    <HeaderContainer>
      <Title>Goedemiddag <Name>{name}</Name></Title>
      <Subtitle>Dit is de status van uw offertes: </Subtitle> 
      <Subtitle>Dit is de status van uw offertes: </Subtitle> 
      <NotificationContainer>
        <NewResponses />
        <OpenResponses />
        <AcceptedResponses />
      </NotificationContainer>
      <PrimaryButton label="Nieuwe offerte" />
    </HeaderContainer>
  )
}

export default Header;