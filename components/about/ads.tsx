import { Box, Heading, Span} from '@chakra-ui/react'
import { JSX } from '@emotion/react/jsx-runtime'
import Image from 'next/image'
import React from 'react'
import responsive_image from '@/assets/images/responsive_techs.png'

function Ads(): JSX.Element {
  return (
    <Box height={{xl: '400px'}} marginBottom={'30px'} _light={{backgroundImage: 'linear-gradient(to right,#eef1f6 40%,#D3D5D9 60%)'}}  _dark={{backgroundImage: 'linear-gradient(to left,#0d161e 40%,#1A2B3B 60%)'}}  >
        <Box className='wrapper' display={'grid'} paddingY={'20px'} gridTemplateColumns={{xl: 'auto auto', base: 'auto'}} justifyContent={'center'} alignItems={'center'}>
            <Box width={'100%'}>
                <Heading textTransform={'uppercase'} fontSize={{xl: '5xl', lg: '4xl',md: '3xl', sm: '2xl', base: 'xl'}} textAlign={{xl: 'left', base: 'center'}} lineHeight={{lg: '70px', base: '35px'}}><Span backgroundImage={'linear-gradient(to right, #2F80ED,#7DB0F4)'} backgroundClip={'text'} color={'transparent'}>Sifat</Span> va <Span backgroundImage={'linear-gradient(to right, #FF0000,#FF5D5D)'} backgroundClip={'text'} color={'transparent'}>mukammallik</Span> kafolati. Aks holda pulingiz qaytariladi.</Heading>
            </Box>
            <Box width={{xl: '50vw', base: '100%'}} display={{xl: 'block', base: 'flex'}} justifyContent={'center'} alignItems={'center'}>
                <Image src={responsive_image} alt='webcraft image design'></Image>
            </Box>
        </Box>
    </Box>
  )
}

export default Ads