import React from 'react'

import { NavigationContainer, NavigationContent } from './styled'
import SearchBar from '../SearchBar/index'

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationContent>
        <SearchBar />
      </NavigationContent>
    </NavigationContainer>
  )
}

export default Navigation