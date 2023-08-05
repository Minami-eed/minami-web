import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

const Paragraph = ({ children }) => {
  return (
    <Box as="p" textAlign="justify" textIndent="1em" hyphens="auto">
      {children}
    </Box>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paragraph
