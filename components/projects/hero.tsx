import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { JSX } from 'react'
import image from '@/assets/images/projects-hero.png'
import Image from 'next/image'
import FormDialog from '../dialog/dialog'
import CallDialog from '../dialog/callDialog'
import { useColorModeValue } from '../ui/color-mode'
function Hero(): JSX.Element {
    const hoverBg = useColorModeValue("black", "white");
    return (
        <Box marginTop={'65px'} marginBottom={'40px'} _dark={{ bg: '#0d161e' }} _light={{ bg: '#EEF1F6' }} >
            <Box className='wrapper' display={'grid'} gridTemplateColumns={{ xl: 'auto auto', base: 'auto' }} gap={{xl: '0', base:'50px'}} alignItems={{xl: 'none', base: 'center'}} justifyContent={{ xl: 'space-between', base: 'center' }} textAlign={'center'} paddingTop={'90px'} paddingX={'20px'} >
                <Box>
                    <Heading lineHeight={{sm: '55px', base:'40px'}} marginBottom={'30px'} fontSize={{sm: '5xl', base: '3xl'}}><i className='text-[#2F80ED]'>WebCraft</i> Internet marketing agentligi </Heading>
                    <Text fontSize={{sm:'2xl',base:'xl'}} marginBottom={'40px'}>Loyihalarimiz bilan tanishing.</Text>
                    <Box marginTop={'30px'} display={'grid'} gridTemplateColumns={'auto auto'} gap={'10px'}>
                        <FormDialog children={<Button>Hoziroq buyurtma qilish</Button>} />
                        <CallDialog children={<Button variant={'outline'} _hover={{
                            bg: hoverBg,
                            color: useColorModeValue("white", "black"), // Matn rangi teskari bo'lsin
                        }}
                        >Aloqa uchun</Button>} />
                    </Box>
                </Box>
                <Box width={'60vw'}>
                    <Image src={image} alt='webcraft image png hero image'></Image>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero