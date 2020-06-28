import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'text'
})`
  background-color: ${props => props.theme.colors.gray};
  height: 20px;
  width: 580px;
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.colors.black};
  :focus {
    outline: none;
  }
`
