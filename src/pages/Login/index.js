import React from 'react'
import { Title } from './styled'

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => console.log(data);

 return (
    <>
      <Title>Dit is de login page</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="vul hier je username in" ref={register}/>
        <input name="password" placeholder="vul hier je password in" ref={register} />
        <input type="submit" />
      </form>
    </>
  )
}

export default LoginPage