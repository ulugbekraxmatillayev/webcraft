import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
interface childTextProps{
    childText: string;
}
function HeadingTag({childText}: childTextProps) {
    return (
        <Box  marginBottom={'40px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'} textAlign={'center'} marginBottom={'20px'} lineHeight={'45px'} cursor={'pointer'} fontSize={{xl:'36px', md:'30px',base:'22px'}}>
                {childText}
            </Heading>
        </Box>
    )
}

export default HeadingTag