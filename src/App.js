import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './theme/theme'
import GlobalStyle from './theme/globalStyles'
import GlobalFonts from './theme/globalFonts'

// import Dashboard from './pages/Dashboard'
import LoginPage from './pages/Login'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* hier komt de router */}
        <LoginPage />
        <GlobalFonts />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
