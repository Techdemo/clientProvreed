import React from 'react';
import { Container, Text } from './styled';

import { NewMessage } from '../../../../../../assets/icons/index';

const OpenResponses = () => {
  return (
    <Container>
      <NewMessage />
      <Text>Openstaande offerte(s)</Text>
    </Container>
  )
}

export default OpenResponses;