import Head from 'next/head'
import http from '../utils/http'
import { Box, Container, Text, Heading, Grid, Divider } from '@chakra-ui/react'
import Post from '../components/Post'

export async function getStaticProps() {
  const res = await http.get('/posts')
  const data = res.data.splice(0, 20)
  return {
    props: {
      posts: data,
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <Container py={10}>
        <Box as="header" py={16} textAlign="center">
          <Heading as="h1" mb={4}>
            Blog Posts
          </Heading>
          <Text color="gray.500" fontSize="lg">
            Blog posts project using React and Next.js
          </Text>
        </Box>
        <Box as="main">
          <Grid
            as="ul"
            listStyleType="none"
            templateColumns="repeat(2, 1fr)"
            gap={6}
            pb={10}
          >
            {posts.map(({ id, title }) => (
              <Post key={id} id={id} title={title} />
            ))}
          </Grid>
        </Box>
        <Box as="footer" color="gray.500" textAlign="center">
          <Divider />
          <Text py={5}>Developed by Mehdi Neysi</Text>
        </Box>
      </Container>
    </>
  )
}
