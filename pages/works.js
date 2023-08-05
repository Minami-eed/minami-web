import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { worksData } from '../components/works-data'
import Layout from '../components/layouts/article'
const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={5}>
          My Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {worksData.map((work, index) => (
            <Section key={index}>
              <WorkGridItem
                id={work.id}
                title={work.title}
                thumbnail={work.thumbnail}
                description={work.description}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
