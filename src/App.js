import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './theme/theme'
import GlobalStyle from './theme/globalStyles'
import GlobalFonts from './theme/globalFonts'

import Main from './Main'
import AuthContextProvider from './context/AuthContext/index'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
            <Main />
        </AuthContextProvider>
        <GlobalFonts />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
