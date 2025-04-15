import { Box, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import ParticleBackground from '@/components/particles'
import FormDialog from '../dialog/dialog';

function Hero() {
    return (
        <Box  paddingTop={'100px'} marginBottom={'20px'} display={'flex'} justifyContent={'space-between'} flexDirection={{ xl: 'row', base: 'column' }} gap={{ lg: '0', base: '2rem' }} textAlign={{ xl: 'left', base: 'center' }} className='wrapper'>
            <ParticleBackground />
            <Box display={{ xl: 'block', base: 'flex' }} flexDirection={'column'} justifyContent={'center'}>
                <Box >
                    <Heading fontSize={'50px'} lineHeight={'51px'}><span className='text-[#2f80ed]'>Internet Marketing,</span> <br /> Google Reklama va SEO Xizmatlari</Heading>
                    <br />
                    <p className='!text-xl'>Sizning biznesingiz uchun raqamli marketing xizmatlari kerakmi? <br /> Ishni mutaxassislarga topshiring va natijani kafolatlang!</p>
                    <br />
                    <p className='!text-xl'>Tajribali jamoamiz Google reklama, SEO va raqamli marketing strategiyalarini taklif etadi. Samaradorlikni oshirish va mijozlaringizni ko‘paytirish uchun biz bilan ishlang!</p>
                    <br />
                    <p className='!text-xl !font-semibold'>Hoziroq biz bilan bog‘laning!</p>
                    <br />
                </Box>
                <Box display={{ md: 'flex', base: 'grid' }} justifyContent={{ xl: 'start', base: 'center' }} alignItems={'center'} gap={3} >
                    <FormDialog children={<Button variant={'outline'} fontSize={'20px'} width={{ lg: '20vw', md: '25vw', base: '95vw' }} height={'50px'} borderColor={'#2F80ED'} color={'#2F80ED'} _hover={{ bg: "#2F80ED", color: 'white' }}>Bog'lanish</Button>} />
                    <Link href={'tel:+998880340912'}><Button fontSize={'20px'} width={{ lg: '20vw', md: '25vw', base: '95vw' }} height={'50px'} variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }}><MdOutlineLocalPhone />+998 88 034 09 12</Button></Link>
                </Box>
            </Box>
            <Box width={'100%'} display={{ xl: 'block', base: 'flex' }} justifyContent={'center'}>
                <img src="https://websolutions.net.in/wp-content/uploads/2022/02/website-design-service.png" alt="" />
            </Box>
        </Box>
    )
}

export default Hero