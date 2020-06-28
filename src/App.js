import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './theme/theme'
import GlobalStyle from './theme/globalStyles'
import GlobalFonts from './theme/globalFonts'

// import Dashboard from './pages/Dashboard'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* hier komt de router */}
        <Dashboard />
        <GlobalFonts />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
