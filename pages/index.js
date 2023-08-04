import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Developer based in Peru!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box>
          <Heading as="h2" variant="page-title">
            Edson Ever David
          </Heading>
          <Heading as="h2" variant="page-title">
            Quispe Salas
          </Heading>
          <p>
            Developer<br></br>
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
