import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Goldplay-SemiBold;
  font-size: 36px;
  color: ${props => props.theme.colors.black};
  margin: 16px 0 8px 0;
`;

export const Name = styled.span`
  color: ${props => props.theme.colors.orange};
`;

export const SubTitle = styled.h4`
  font-size: 20px;
  font-family: Goldplay-Regular;
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

export const HeadFunctions = styled.div `
  background-color: #f2f3f4;
`

export const TableFunctions = styled.div `
  background-color: white;
`