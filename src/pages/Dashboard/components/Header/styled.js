import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Goldplay-SemiBold;
  font-size: ${props => props.theme.fonts.headingSize};
  color: ${props => props.theme.colors.black};
  margin: 16px 0 8px 0;
`;

export const Name = styled.span`
  color: ${props => props.theme.colors.orange};
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.theme.fonts.subheadingSize};
  color: ${props => props.theme.colors.black};
`;

export const PrimaryButton = styled.button `
  background-color: ${props => props.theme.colors.blue};
  color: white;
  padding: 12px 24px;
  border-radius:40px;
  border: none;
  font-size: 16px; 
  font-family: Goldplay-SemiBold;
`

export const HeaderContainer = styled.div`
  height: 40rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
`;

export const NotificationContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
`;
