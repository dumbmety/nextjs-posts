import {
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import http from '../../utils/http'

export async function getStaticPaths() {
  const { data: posts } = await http.get('/posts')

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { data: post } = await http.get(`/posts/${params.id}`)
  const { data: author } = await http.get(`/users/${post.userId}`)
  const { data: comments } = await http.get(`/comments?postId=${params.id}`)

  return { props: { author, post, comments } }
}

export default function Post({ author, post, comments }) {
  return (
    <Layout>
      <VStack mb={6} spacing={3} alignItems="flex-start">
        <Heading
          as="h2"
          fontSize="2xl"
          lineHeight={8}
          fontWeight={500}
          textTransform="capitalize"
        >
          {post.title}
        </Heading>
        <Text color="gray.500" fontSize="lg">
          Created by{' '}
          <Link
            color="teal.500"
            fontWeight={500}
            href={`mailto:${author.website}`}
          >
            {author.name}
          </Link>
        </Text>
      </VStack>
      <Text mb={6} colro="gray.700">
        {post.body}
      </Text>
      <Flex mb={3} alignItems="center">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="#CBD5E0">
          <path d="M20 2H4C2.897 2 2 2.897 2 4v18l5.333-4H20c1.103 0 2-0.897 2-2V4C22 2.897 21.103 2 20 2z M20 16H6.667L4 18V4h16V16z" />
        </svg>
        <Heading as="h3" ml={2} fontSize="xl" fontWeight={500}>
          Comments
        </Heading>
      </Flex>
      <UnorderedList>
        {comments.map(({ id, name: comment }) => (
          <ListItem key={id} color="gray.600" _hover={{ color: 'gray.900' }}>
            {comment}
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  )
}
