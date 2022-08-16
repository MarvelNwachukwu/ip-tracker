import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: 'hsl(0, 0%, 17%)',
    800: 'hsl(0, 0%, 59%)',
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: { pageProps: any, Component: any}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
