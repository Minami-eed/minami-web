import React from 'react'
import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const TitleWork = ({ children }) => (
  <Box display="flex" alignItems="center" mb={3} mt={4}>
    <Link as={NextLink} href="/works" fontSize={16} mr={2}>
      Works
    </Link>
    <ChevronRightIcon boxSize={4} />
    <Heading as="h3" fontSize={20} mb={0} ml={2}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
