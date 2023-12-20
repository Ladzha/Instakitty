import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, background, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
  global:(props) =>({
    body:{
      bg:mode('gray.100', '#000')(props),
      color:mode('gray.900', 'whiteAlpha.900')(props)
    }
  }),
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
