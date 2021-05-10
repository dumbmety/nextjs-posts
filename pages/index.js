import Head from 'next/head'
import { Grid } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import http from '../utils/http'

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
      <Layout home>
        <Grid
          as="ul"
          listStyleType="none"
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          {posts.map(({ id, title }) => (
            <Post key={id} id={id} title={title} />
          ))}
        </Grid>
      </Layout>
    </>
  )
}
