import { technologys } from '@/items'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { JSX } from 'react'
import { useColorMode } from '@/components/ui/color-mode'
import HeadingTag from '../heading/headingtag'

function Technologies(): JSX.Element {
    const {colorMode} = useColorMode()
    return (
        <Box marginY={'40px'}>
           <HeadingTag childText='Biz ishlatadigan texnologiyalar'/>
            <Box className='wrapper' display={'grid'} justifyContent={'space-around'} gridTemplateColumns={'auto auto auto auto'} gap={'10px'}>
                {technologys.map((item, i) => {
                    const imageUrl = colorMode === 'dark' && item.url2 ? item.url2 : item.url
                    return (
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Image width={100} height={100} src={imageUrl} alt={item.id}></Image>
                            <Text>{item.name}</Text>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Technologies