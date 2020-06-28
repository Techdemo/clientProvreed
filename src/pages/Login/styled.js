import styled from 'styled-components';

export const Flexbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding: 100px 0;
`;  

export const Title = styled.h1`
  font-family: Goldplay-SemiBold;
  text-align: center;
  font-size: 36px;
  color: ${props => props.theme.colors.black};
`;

export const Form = styled.form`
  display: flex;
  justify-content:center;
  flex-direction: column;
  /* max-width: 1600px; */
  margin: auto;
`;

export const InputSubmit = styled.input`
  padding: 10px 30px;
  background-color: #fc0;
  border: none;
  border-radius: 100px;
  color: white;
  font-size: 18px;
  font-family: Goldplay-semiBold;
  margin-top: 12px;
  max-width: 100%;
`;

export const InputFields = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 2px solid #fc0;
  border-radius:100px;
  margin-top: 12px;
  max-width: 147px;
  ::-webkit-input-placeholder {
   text-align: center;
}
 :focus {
  outline: none;
}
`;

export const NoAccount = styled.p`
  color: black;
  text-align: center;
  margin-top: 12px;
`;