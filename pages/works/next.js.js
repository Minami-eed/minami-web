import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { TitleWork, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Next.js">
    <Container>
      <TitleWork>
        Next.js <Badge>2016</Badge>
      </TitleWork>
      <P>
        Next.js es un marco web de desarrollo front-end de React de código
        abierto creado por Vercel que habilita funcionalidades como la
        representación del lado del servidor y la generación de sitios web
        estáticos para aplicaciones web basadas en React.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nextjs.org/">
            https://nextjs.org/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://nextjs.org/">
            Utilizado por algunas de las empresas más grandes del mundo{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/next-js.png" alt="Next.js" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/DrxiNfbr63s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
