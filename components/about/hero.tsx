import React, { JSX } from 'react'
import { MdOutlineLocalPhone } from 'react-icons/md'
import group from '@/assets/images/about-us.png'
import Image from 'next/image'
import FormDialog from '@/components/dialog/dialog'
import { Box, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'

function Hero(): JSX.Element {
    return (
        
        <Box marginTop={'65px'} _dark={{ bg: '#0d161e' }} _light={{ bg: '#EEF1F6' }} >
            <Box className='wrapper' paddingTop={'90px'} padding={'20px'}>
                <Box className="title" display={{ xl: 'flex' }} >
                    <Box display={{ xl: 'block', base: 'flex' }} flexDirection={'column'} justifyContent={'center'} textAlign={{ xl: 'left', base: 'center' }}>
                        <Heading lineHeight={'55px'} marginBottom={'30px'} fontSize={'5xl'}><i className='text-[#2F80ED]'>WebCraft</i> Internet marketing agentligi </Heading>
                        <p className='!text-xl !mb-5'>Shiorimiz: <i className='!text-[blue]'>"Sifat va intilish – mukammallik sari yo‘ldir!"</i></p>
                        <p className='!text-2xl !mb-10'>Biz daromat keltiruvchi internet marketing xizmatlarini taklif etamiz. <br /> Bizning agentlik siz so'ragandan yaxshiroq xizmat ko'rsatishga xarakat qiladi.</p>
                        <p className='!mb-8 !font-semibold !italic !text-lg'>O'z biznesingizni biz bilan quring.</p>
                        <Box display={{ md: 'flex', base: 'grid' }} justifyContent={{ xl: 'start', base: 'center' }} alignItems={'center'} gap={3} >
                            <FormDialog children={<Button variant={'outline'} fontSize={'20px'} width={{ lg: '20vw', md: '25vw', base: '95vw' }} height={'50px'} borderColor={'#2F80ED'} color={'#2F80ED'} _hover={{ bg: "#2F80ED", color: 'white' }}>Bog'lanish</Button>} />
                            <Link href={'tel:+998880340912'}><Button fontSize={'20px'} width={{ lg: '20vw', md: '25vw', base: '95vw' }} height={'50px'} variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }}><MdOutlineLocalPhone />+998 88 034 09 12</Button></Link>
                        </Box>
                    </Box>

                    <Box display={{ xl: 'block', base: 'flex' }} justifyContent={'center'}>
                        <Image width={600} height={600} src={group} alt='webcraft images'></Image>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero