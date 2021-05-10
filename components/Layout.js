import { Box, Container, Text, Heading, Divider } from '@chakra-ui/react'

export default function Layout({ children, home }) {
  return (
    <Container py={10}>
      <Box as="header" py={home ? 16 : 10} textAlign="center">
        <Heading as="h1" mb={4}>
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
        <Text py={5}>Developed by Mehdi Neysi</Text>
      </Box>
    </Container>
  )
}
