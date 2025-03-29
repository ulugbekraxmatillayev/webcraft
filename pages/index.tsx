import Hero from '@/components/home/hero'
import ParticleBackground from '@/components/particles'
import { ColorModeProvider } from '@/components/ui/color-mode'
import React, { JSX } from 'react'

const Index = (): JSX.Element => {
  return (
    <div>
      {/* hero comp */}
      <Hero  />      
      {/* <ParticleBackground /> */}
    </div>
  )
}

export default Index