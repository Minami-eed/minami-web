import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import Head from 'next/head'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Minami website" />
        <meta name="author" content="Edson, Quispe Salas" />
        <meta name="author" content="Minami EED" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minami_eed" />
        <meta name="twitter:creator" content="@minami_eed" />
        <meta name="twitter:image" content="https://www.minami.bio/card.png" />
        <meta property="og:site_name" content="Minami EED" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.minami.bio/card.png" />
        <title>Home / Minami EED</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
