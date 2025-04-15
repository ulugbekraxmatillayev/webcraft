import Ads from '@/components/about/ads'
import AboutSeo from '@/components/home/aboutSeo'
import Benefits from '@/components/home/benefits'
import Hero from '@/components/home/hero'
import HowWork from '@/components/home/howwork'
import Services from '@/components/home/services'
import Project from '@/components/projects/project'
import React, { JSX } from 'react'

const Index = (): JSX.Element => {
  return (
    <div>
      {/* hero comp */}
      <Hero  />      

      {/* Services */}
      <Services />
      
      {/* Benefit */}
      <Benefits/>
      
      {/* ads */}
      <Ads/>

      {/* How work */}
      <HowWork/>

      {/* About SEO */}
      <AboutSeo/>

      {/* projects */}
      <Project/>
    </div>
  )
}

export default Index