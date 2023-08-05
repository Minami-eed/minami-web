import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { worksData } from '../components/works-data'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
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
  )
}

export default Works
