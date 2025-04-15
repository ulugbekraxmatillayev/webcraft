import Count from '@/components/projects/count'
import Hero from '@/components/projects/hero'
import Project from '@/components/projects/project'
import WorkOrder from '@/components/projects/work-order'
import { Box} from '@chakra-ui/react'
import React from 'react'

function Projects() {
  return (
    <Box>
      {/* for hero */}
      <Hero />

      {/* for project items */}
      <Project />

      {/* for work order */}
      <WorkOrder />

      {/* for count */}
      <Count />
    </Box>
  )
}

export default Projects