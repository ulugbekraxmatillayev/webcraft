import { Box, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import FormDialog from '../dialog/dialog';

function Hero() {
    return (
        <Box paddingTop={'100px'} marginBottom={'20px'} display={'flex'} justifyContent={'space-between'}  flexDirection={{lg: 'row', base: 'column'}} gap={{lg: '0', base: '2rem'}} textAlign={{lg:'left',base: 'center'}} className='wrapper'>
            <Box>
                <Heading fontSize={'50px'} lineHeight={'51px'}><span className='text-[#7DB0F4]'>Internet Marketing,</span> <br /> Google Reklama va SEO Xizmatlari</Heading>
                <br />
                <p className='!text-xl'>Sizning biznesingiz uchun raqamli marketing xizmatlari kerakmi? <br /> Ishni mutaxassislarga topshiring va natijani kafolatlang!</p>
                <br />
                <p className='!text-xl'>Tajribali jamoamiz Google reklama, SEO va raqamli marketing strategiyalarini taklif etadi. Samaradorlikni oshirish va mijozlaringizni ko‘paytirish uchun biz bilan ishlang!</p>
                <br />
                <p className='!text-xl !text-red-500 !font-semibold'>Hoziroq biz bilan bog‘laning!</p>
                <br />
                <Box display={{md: 'flex', base: 'grid'}} textAlign={'center'} marginLeft={{lg: '0', md: '25vw', sm: '10vw', base: '5vw'}} alignItems={'center'} gap={3}>
                    <FormDialog  children={<Button  variant={'outline'} fontSize={'20px'} width={'230px'} height={'50px'} borderColor={'#2F80ED'} color={'#2F80ED'} _hover={{ bg: "#2F80ED", color: 'white' }}>Bog'lanish</Button>}/>
                    <Link href={'tel:+998880340912'}><Button  fontSize={'20px'} width={'230px'} height={'50px'} variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }}><MdOutlineLocalPhone />+998 88 034 09 12</Button></Link>
                </Box>
            </Box>
            <Box width={'100%'} display={{lg: 'block', base: 'flex'}} justifyContent={'center'}> 
                <img src="https://websolutions.net.in/wp-content/uploads/2022/02/website-design-service.png" alt="" />
            </Box>
        </Box>
    )
}

export default Hero