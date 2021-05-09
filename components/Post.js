import { useRouter } from 'next/router'
import { Box, Text, Link } from '@chakra-ui/react'

export default function Post({ id, title }) {
  const router = useRouter()

  function handleClick() {
    router.push(`/post/${id}`)
  }

  return (
    <Box
      as="li"
      p={6}
      d="flex"
      flexDir="column"
      rounded="md"
      cursor="pointer"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.200"
      onClick={handleClick}
      transitionDuration="0.2s"
      _hover={{ boxShadow: 'xl' }}
    >
      <Text
        mb={4}
        flex={1}
        color="gray.500"
        fontSize="sm"
        fontWeight={500}
        textTransform="capitalize"
      >
        {title}
      </Text>
      <Link color="teal.500" fontWeight={500}>
        Read more...
      </Link>
    </Box>
  )
}
