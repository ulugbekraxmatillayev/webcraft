import { Box, Heading, Text } from '@chakra-ui/react'
import React, { JSX } from 'react'
import HeadingTag from '../heading/headingtag'
import Image from 'next/image'
import BenefitCard from '../cards/benef_card'
import { benefitData } from '@/items'

function Benefits(): JSX.Element {
  return (
    <Box marginTop={'40px'} marginBottom={'60px'}>
      <Box className='wrapper'>
        {/* Heading */}
        <HeadingTag childText='Afzalliklarimiz' />
        <Box display='grid' gridTemplateColumns={{xl: 'auto auto auto auto', lg: 'auto auto'}} textAlign={{lg: 'none', base:'center'}} alignItems={'center'} justifyContent={{lg:'none', base:'center'}} gap='10px'>
          {benefitData.map((item, i) => {
            return (
              <BenefitCard key={i} childId={item.id} childIco={item.icon} childName={item.name} childTitle={item.title} />
            )
          })

          }
        </Box>
      </Box>
    </Box>
  )
}

export default Benefits