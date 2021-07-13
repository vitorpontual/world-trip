import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import  Header  from '../components/Header'

import { theme } from '../styles/theme'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Header />
    </ChakraProvider>
    )
}

export default MyApp
