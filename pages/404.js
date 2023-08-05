import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Layout>
      <Container mt={20}>
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button
            as={NextLink}
            href="/"
            style={{ backgroundColor: '#805ad5', color: '#FFFFFF' }}
          >
            Return to home
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
