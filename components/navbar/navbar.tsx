import Image from 'next/image'
import React, { JSX } from 'react'
import logo from '../../assets/icons/globe.png'
import Link from 'next/link'
import { Box, Button, CloseButton, Drawer, Portal, ClientOnly, IconButton, Skeleton } from '@chakra-ui/react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import FormDialog from '../dialog/dialog'
function Navbar(): JSX.Element {
    const { toggleColorMode, colorMode } = useColorMode()
    const navLinks = [
        {
            id: 1,
            title: 'Biz haqimizda',
            link: '/biz-haqimizda'
        },
        {
            id: 2,
            title: 'Loyihalar',
            link: '/loyihalar'
        },
        {
            id: 3,
            title: 'Narxlar',
            link: '/narxlar'
        }
    ]
    return (
        <Box _light={{ bg: 'white' }} _dark={{ bg: 'black' }}  className='!border !border-l-0 !border-r-0 !border-t-0 !border-bottom-slate-300 !mb-5 w-full fixed top-0 left-0 ' zIndex={'1000'}>
            <Box  className='wrapper mx-auto flex justify-between items-center p-5 !py-2 '>
                {/* <Box >

                </Box> */}
                    {/*for logo */}
                    <Link href={'/'}>
                        <Box className='flex items-center cursor-pointer'>
                            <Image src={logo} alt='rasm' width={50} height={50}></Image>
                            <p className='!font-bold !text-lg'>
                                <span className='!text-[#122fe3]'>Web</span>
                                <span className='!text-gray-500'>Craft</span>
                            </p>
                        </Box>
                    </Link>

                    {/* for links */}
                    <Box className='flex gap-16 !text-lg !font-semibold' display={{ base: 'none', lg: 'flex' }}>
                        {navLinks && navLinks.length > 0 && navLinks.map((item, i) => {
                            return(
                        <Link key={i} href={item.link} className='relative overflow-hidden navLink'>
                            <span className='bottomSlice'></span>
                            {item.title}
                        </Link>
                            )
                        })
                        }
                    </Box>

                    {/* for btns */}
                    <Box display={{ base: 'none', lg: 'flex' }} alignItems={'center'} gap={3}>
                        <Link href={'tel:+998880340912'}><Button variant={'outline'} borderColor={'#2F80ED'} color={'#2F80ED'} _hover={{ bg: "#2F80ED", color: 'white' }}><MdOutlineLocalPhone />Aloqa</Button></Link>
                        <FormDialog children={<Button variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }}>Buyurtma berish</Button>} />
                        <Box display={{ base: 'none', md: 'flex' }}>
                            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                                <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                                </IconButton>
                            </ClientOnly>
                        </Box>
                    </Box>


                {/* for responsive menu */}
                <Box position={'relative'} zIndex={'10000'} display={{ base: 'flex', lg: 'none' }} alignContent={'center'}>
                    <Drawer.Root>
                        <Drawer.Trigger asChild>
                            <Box fontSize={'35px'} cursor={'pointer'}>
                                <FiMenu />
                            </Box>
                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content>
                                    <Drawer.Header _dark={{ bg: 'black' }} _light={{ bg: 'white' }} borderBottom="2px solid #eef1f6" zIndex={'1000000'} >
                                        <Drawer.Title fontSize={'24px'} fontWeight={'700'} display={'flex'} alignItems={'center'} gap={'9rem'}>
                                            <Box>Menu</Box>
                                            <Box>
                                                <ClientOnly fallback={<Skeleton boxSize="8" />}>
                                                    <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                                                        {colorMode === "light" ? <LuSun /> : <LuMoon />}
                                                    </IconButton>
                                                </ClientOnly>
                                            </Box>
                                        </Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body>

                                        <Box className='grid !text-lg !font-semibold !mb-10'>
                                            <Box className='linkBtn !px-5 !py-2' _active={{ bg: "rgb(238 241 246)" }} _dark={{ _active: { bg: 'gray' } }}>
                                                <Link href={'#'} >Biz haqimizda</Link>
                                            </Box>
                                            <Box className='linkBtn !px-5 !py-2' _active={{ bg: "rgb(238 241 246)" }} _dark={{ _active: { bg: 'gray' } }}>
                                                <Link href={'#'} >Loyihalar</Link>
                                            </Box>
                                            <Box className='linkBtn !px-5 !py-2' _active={{ bg: "rgb(238 241 246)" }} _dark={{ _active: { bg: 'gray' } }}>
                                                <Link href={'#'} >Narxlar</Link>
                                            </Box>
                                        </Box>
                                        <Box className='grid gap-3'>
                                            <Link href={'tel:+998880340912'} className='grid'><Button variant={'outline'} borderColor={'#2F80ED'} color={'#2F80ED'} _hover={{ bg: "#2F80ED", color: 'white' }} className='callBtn'><MdOutlineLocalPhone />Aloqa</Button></Link>
                                            <FormDialog children={<Button variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }} className='orderBtn'>Buyurtma berish</Button>} />
                                        </Box>
                                    </Drawer.Body>

                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar