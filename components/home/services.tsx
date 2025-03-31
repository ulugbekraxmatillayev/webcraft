import React, { JSX } from 'react'
import Card from '../cards/card'
import { Box, Heading } from '@chakra-ui/react'
import { services } from '@/items'
function Services(): JSX.Element {
    return (
        <Box height={{lg: '190vh', md: '280vh',sm: '365vh', base: '705  vh'}} paddingY={'60px'} paddingX={'20px'} _light={{ bg: '#F3F6FB' }} _dark={{ bg: '#0D161E' }} className="wrapper">
            <Box marginBottom={'40px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Heading cursor={'pointer'} fontSize={'36px'}><i className='hover:text-[#2F80ED]'>Internet</i> <i className='text-red-500'>Marketing</i> <i className='hover:text-[#2f80ed]'>xizmatlari</i></Heading>
            </Box>
            <Box display={'grid'} gridTemplateColumns={{lg: 'auto auto auto auto', md: 'auto auto auto', sm: 'auto auto', base: 'auto'}}  gap={'2rem'}>
                {services && services.length > 0 && services.map((item, i) => {
                    console.log(item.image)
                    return (
                        <Card key={i} childImg={item.image} childName={item.name} childTitle={item.title} />
                    )
                })}
            </Box>
        </Box>
    )
}

export default Services