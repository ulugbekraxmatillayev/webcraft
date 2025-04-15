
import Hero from '@/components/about/hero'
import Team from '@/components/about/team'
import Technologies from '@/components/about/technologies'
import Ads from '@/components/about/ads'
import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import Question from '@/components/about/question'


function About(): JSX.Element {
  return (
    <Box>
      {/* about hero */}
      <Hero />

      {/* technologies */}
      <Technologies />

      {/* team */}
      <Team />
      <br />
      {/* work */}
      <Ads />

      {/* questions */}
      <Question/>
    </Box>
  )
}

export default About