import React, { JSX } from 'react'
import Card from '../cards/card'
import { Box, Heading } from '@chakra-ui/react'
import { services } from '@/items'
import HeadingTag from '../heading/headingtag'
function Services(): JSX.Element {
    return (
        <Box  paddingY={'60px'} paddingX={'20px'} _light={{ bg: '#F3F6FB' }} _dark={{ bg: '#0D161E' }} className="wrapper">
           <HeadingTag childText='internet marketing xizmatlari'/>
            <Box display={'grid'} gridTemplateColumns={{lg: 'auto auto auto auto', md: 'auto auto auto', sm: 'auto auto', base: 'auto'}}  gap={'2rem'}>
                {services && services.length > 0 && services.map((item, i) => {
                    console.log(item.image)
                    return (
                        <Card childId={item.id} key={i} childImg={item.image} childName={item.name} childTitle={item.title} />
                    )
                })}
            </Box>
        </Box>
    )
}

export default Services