import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  max-width: 15rem;
  flex-direction: row; 
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.theme.fonts.textSize};
`