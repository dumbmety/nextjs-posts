import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import SimpleBar from 'simplebar-react'

import theme from '../utils/theme'
import 'simplebar/dist/simplebar.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SimpleBar style={{ maxHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SimpleBar>
    </>
  )
}

export default MyApp
