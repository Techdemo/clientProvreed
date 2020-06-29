import React, { createContext, useState } from 'react'
import axios from 'axios';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState([
    { token: 0,
      login: false,
      user: null
    }
  ])

  const addToken = token => {
    const newToken = {
      token
    }
    setAuthData([...authData, newToken])
  }

  const setLoggedIn = login => {
    const newLogin = {
      login
    }
    setAuthData([...authData, newLogin])
  }

  const totalLogin = ({username, password}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ username, password });

    axios.post(`http://localhost:5000/api/v1/auth`, body, config )
      .then(res => {
        const auth = {
          token: res.data.token,
          login: true,
          user: res.data.user
        }

        setAuthData([auth])
      }).catch(err => {console.log(err)})

// oke is goed
    // const auth = {
    //   token,
    //   login
    // }
    // setAuthData([...authData, auth])
  }

  return (
    <AuthContext.Provider value={{ authData, addToken, setLoggedIn, totalLogin, setAuthData  }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

