import { useRouter } from 'next/router'
import { Box, Container, Text, Heading, Divider, Link } from '@chakra-ui/react'

export default function Layout({ children, home }) {
  const router = useRouter()

  function gotoHome() {
    router.push('/')
  }

  return (
    <Container py={10}>
      <Box as="header" py={home ? 16 : 10} textAlign="center">
        <Heading as="h1" mb={4} cursor="pointer" onClick={gotoHome}>
          Blog Posts
        </Heading>
        <Text color="gray.500" fontSize="lg">
          Blog posts project using React and Next.js
        </Text>
        {!home && <Divider mt={10} />}
      </Box>
      <Box as="main" pb={10}>
        {children}
      </Box>
      <Box as="footer" color="gray.500" textAlign="center">
        <Divider />
        <Text py={5}>
          Developed by{' '}
          <Link color="teal.500" href="https://github.com/neysidev">
            Mehdi Neysi
          </Link>
        </Text>
      </Box>
    </Container>
  )
}
