import React from 'react'
import { Title, Flexbar, Form, InputSubmit, InputFields, NoAccount } from './styled'

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => console.log(data);

 return (
    <>
      <Flexbar>
        <Title>Log in met je gegevens</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputFields name="username" placeholder="E-mailadres" ref={register}/>
          <InputFields type="password" name="password" placeholder="Wachtwoord" ref={register} />
          <InputSubmit type="submit" />
        </Form>
        <NoAccount>Heb je nog geen account? klik <a href='#'>hier</a> voor meer informatie.</NoAccount>
      </Flexbar>
    </>
  )
}

export default LoginPage