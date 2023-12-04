import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={3}
          align="center"
        >
          Hello, I&apos;m a Developer based in Peru!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
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
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              mb={7}
            >
              <Image
                src="/images/minami.jpg"
                alt="Minami Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a passionate programmer in software development with experience
            in creating web and mobile applications.
            <br></br>
            <br></br>I have knowledge in programming languages such as HTML,
            CSS, JavaScript, Java, Kotlin, ASP.NET, Swift and am familiar with
            various development technologies including databases, frameworks,
            and version control tools. Additionally, I have experience in user
            interface design, user experience optimization, and the use of
            artificial intelligence.<br></br>
            <br></br>
            Having collaborated on software development projects in diverse
            organizations, I have demonstrated exceptional ability to work
            collaboratively and solve complex problems. I am an effective
            communicator and take pride in my ability to translate user
            requirements into technological solutions.<br></br>
            <br></br>
            Furthermore, I am committed to continuous education and and I am
            always constantly learning new skills and technologies to enhance my
            developer skills. I am excited about the opportunity to further
            develop my career as a developer and contribute my experience and
            skills to a dynamic and creative team. If you would like to view my
            Works, you may refer to my portfolio below.<br></br>
            <br></br>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                style={{ backgroundColor: '#805ad5', color: '#FFFFFF' }}
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>

          <BioSection>
            <BioYear>2001</BioYear>
            Born in La Libertad, Perú.
          </BioSection>

          <BioSection>
            <BioYear>2023</BioYear>
            He completed the degree in Computer Science and Informatics at the
            Higher Education Institute in Trujillo, CIBERTEC.
          </BioSection>

          <BioSection>
            <BioYear>2023 to present</BioYear>
            Machine Learning.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Recreational pursuits
          </Heading>

          <Paragraph>
            Research, Music, Playing Piano, Video Games, Photography, Machine
            Learning.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            In the digital realm
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Minami-eed" target="_blank">
                <Button
                  variant="ghost"
                  style={{ color: '#805ad5' }}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Minami-eed
                  <ExternalLinkIcon mx="2px" />
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://twitter.com/minami_eed" target="_blank">
                <Button
                  variant="ghost"
                  style={{ color: '#805ad5' }}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Minami_eed
                  <ExternalLinkIcon mx="2px" />
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.instagram.com/minami.eed/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  style={{ color: '#805ad5' }}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Minami.eed
                  <ExternalLinkIcon mx="2px" />
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
