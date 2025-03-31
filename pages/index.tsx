import Hero from '@/components/home/hero'
import Services from '@/components/home/services'
import ParticleBackground from '@/components/particles'
import React, { JSX } from 'react'

const Index = (): JSX.Element => {
  return (
    <div>
      {/* hero comp */}
      <Hero  />      

      {/* Services */}
      <Services />
      <ParticleBackground />
    </div>
  )
}

export default Index