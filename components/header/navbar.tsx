import Image from 'next/image'
import React, { JSX, useEffect, useState } from 'react'
import logo from '../../assets/icons/globe.png'
import Link from 'next/link'
import { Box, Button, CloseButton, Drawer, Portal, ClientOnly, IconButton, Skeleton, Text } from '@chakra-ui/react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import FormDialog from '../dialog/dialog'
import { usePathname } from 'next/navigation';
import CallDialog from '../dialog/callDialog'

function Navbar(): JSX.Element {
    const { toggleColorMode, colorMode } = useColorMode()
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { id: 1, title: 'Biz haqimizda', link: '/biz-haqimizda' },
        { id: 2, title: 'Loyihalar', link: '/loyihalar' },
        { id: 3, title: 'Narxlar', link: '/narxlar' }
    ]

    return (
        <Box
            _light={{ bg: 'white' }}
            _dark={{ bg: 'black' }}
            className='!border !border-l-0 !border-r-0 !border-t-0 !border-bottom-slate-300 !mb-5 w-full fixed top-0 left-0'
            zIndex={'1000'}
        >
            <Box className={`wrapper mx-auto flex items-center p-5 !py-2 transition-all duration-300 ${scrolled ? 'justify-between' : 'justify-between'}`}>

                {/* Logo */}
                <Box className='flex items-center cursor-pointer'>
                    <Link href={'/'} className='flex items-center cursor-pointer'>
                        <Image src={logo} alt='rasm' width={scrolled ? 40 : 50} height={scrolled ? 40 : 50} />
                        {!scrolled && (
                            <p className='!font-bold !text-lg ml-2'>
                                <span className='!text-[#122fe3]'>Web</span>
                                <span className='!text-gray-500'>Craft</span>
                            </p>
                        )}
                    </Link>
                    {scrolled && (
                        <CallDialog children={<Text>(+998)-88-034-09-12</Text>} />
                    )}
                </Box>

                {/* Linklar */}
                <Box className={`flex gap-8 !text-[16px] !font-semibold transition-all duration-300 ${scrolled ? '' : ''}`} display={{ base: 'none', lg: 'flex' }}>
                    {navLinks.map((item, i) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link key={i} href={item.link} className={`relative overflow-hidden navLink ${isActive ? 'activeLink' : ''}`}>
                                <span className='bottomSlice'></span>
                                {item.title}
                            </Link>
                        )
                    })}
                </Box>

                {/* Telefon raqam va toggle */}
                <Box className='flex items-center gap-3' display={{ base: 'none', lg: 'flex' }}>
                    {!scrolled &&
                        (
                            <>
                                <Link href={'tel:+998880340912'}>
                                    <Button
                                        variant={'outline'}
                                        borderColor={'#2F80ED'}
                                        color={'#2F80ED'}
                                        _hover={{ bg: "#2F80ED", color: 'white' }}
                                        size={scrolled ? 'sm' : 'md'}
                                    >
                                        <MdOutlineLocalPhone /> Aloqa
                                    </Button>
                                </Link>
                                <FormDialog children={<Button variant={'outline'} color={'white'} bg={'#333333'} _hover={{ bg: 'black' }} className='orderBtn'>Buyurtma berish</Button>} />

                            </>
                        )
                    }
                    <Box>
                        <ClientOnly fallback={<Skeleton boxSize="8" />}>
                            <IconButton
                                onClick={toggleColorMode}
                                variant="outline"
                                size={scrolled ? 'sm' : 'sm'}
                                aria-label="Toggle Color Mode"
                            >
                                {colorMode === "light" ? <LuSun /> : <LuMoon />}
                            </IconButton>
                        </ClientOnly>
                    </Box>
                </Box>

                {/* Mobil menyu: faqat scroll bo'lmagan holatda */}
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
                                        <Drawer.Header
                                            position={'relative'}
                                            _dark={{ bg: 'black' }}
                                            _light={{ bg: 'white' }}
                                            borderBottom="2px solid #eef1f6"
                                            zIndex={'1000000'}
                                        >
                                            <Drawer.Title fontSize={'24px'} fontWeight={'700'} display={'flex'} alignItems={'center'} gap={'9rem'}>
                                                <Box>Menu</Box>
                                                <Box>
                                                    <ClientOnly fallback={<Skeleton boxSize="8" />}>
                                                        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                                                            {colorMode === "light" ? <LuSun /> : <LuMoon />}
                                                        </IconButton>
                                                    </ClientOnly>
                                                </Box>
                                                <Drawer.CloseTrigger asChild>
                                                    <CloseButton position={'absolute'} top="1rem" right="1rem" size="md" />
                                                </Drawer.CloseTrigger>
                                            </Drawer.Title>
                                        </Drawer.Header>

                                        <Drawer.Body>
                                            <Box className='grid !text-lg !font-semibold !mb-10'>
                                                {navLinks.map((item, index) => (
                                                    <Box key={index} className='linkBtn !px-5 !py-2' _active={{ bg: "rgb(238 241 246)" }} _dark={{ _active: { bg: 'gray' } }}>
                                                        <Link href={item.link}>{item.title}</Link>
                                                    </Box>
                                                ))}
                                            </Box>
                                            <Box className='grid gap-3'>
                                                <Link href={'tel:+998880340912'}>
                                                    <Button
                                                        variant={'outline'}
                                                        borderColor={'#2F80ED'}
                                                        color={'#2F80ED'}
                                                        _hover={{ bg: "#2F80ED", color: 'white' }}
                                                        className='callBtn'
                                                    >
                                                        <MdOutlineLocalPhone /> Aloqa
                                                    </Button>
                                                </Link>
                                                <FormDialog>
                                                    <Button
                                                        variant={'outline'}
                                                        color={'white'}
                                                        bg={'#333333'}
                                                        _hover={{ bg: 'black' }}
                                                        className='orderBtn'
                                                    >
                                                        Buyurtma berish
                                                    </Button>
                                                </FormDialog>
                                            </Box>
                                        </Drawer.Body>
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
