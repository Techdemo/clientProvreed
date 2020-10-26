import React, { useContext } from 'react'
import { Title, Flexbar, Form, InputSubmit, InputFields, NoAccount, LoginCard } from './styled'

import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const { totalLogin } = useContext(AuthContext)

  const onSubmit = data => totalLogin(data)

 return (
      <LoginCard>
        <Flexbar>
          <Title>Log in met je gegevens</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputFields name="username" placeholder="E-mailadres" ref={register}/>
            <InputFields type="password" name="password" placeholder="Wachtwoord" ref={register} />
            <InputSubmit type="submit" />
          </Form>
          <NoAccount>Heb je nog geen account? klik <a href='#'>hier</a> voor meer informatie.</NoAccount>
        </Flexbar>
      </LoginCard>
  )
}

export default LoginPage