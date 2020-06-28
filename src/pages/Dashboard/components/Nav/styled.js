import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  margin-top: 10px;
`

export const NavigationContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

