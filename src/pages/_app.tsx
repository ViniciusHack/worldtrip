import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
