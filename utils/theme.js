import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Inter',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Inter',
      },
    },
  },
})

export default theme
