import React from 'react'
import Router from './router'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store/store'
import { ChakraProvider, theme } from "@chakra-ui/react"

const App = () => {
return(
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Router/>
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default App;
