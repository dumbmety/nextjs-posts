import Head from 'next/head'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Container>Hello World</Container>
    </>
  )
}
