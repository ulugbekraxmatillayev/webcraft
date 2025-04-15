import React, { JSX, ReactNode } from 'react'
import { Box, Button, Dialog, Field, Input, List, Portal, Span, Stack, Text } from "@chakra-ui/react"
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import adminImage from '@/assets/images/admin_image.jpg'
import { HiMiniPhone } from 'react-icons/hi2'
import { FaTelegram } from 'react-icons/fa'
type FormDialogProps = {
    children: ReactNode
}
function CallDialog({ children }: FormDialogProps): JSX.Element {

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Aloqa uchun quyidagilar</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb="4">
                            <Stack gap="4" display={'grid'} gridTemplateColumns={'auto auto'}>
                                <List.Root listStyle={'none'} display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'30px'} fontSize={'15px'}>
                                    <List.Item fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={'5px'}><HiMiniPhone />Telefon: </List.Item>
                                    <List.Item fontSize={'20px'}>
                                        <Button><Link href={'tel:+998.88-200-27-72'} target='blank'>+998.88-200-27-72</Link></Button>
                                    </List.Item>
                                    <List.Item fontSize={'20px'}>
                                        <Button><Link href={'tel:+998.93-818-81-77'} target='blank'>+998.93-818-81-77</Link></Button>
                                    </List.Item>
                                    <List.Item fontSize={'20px'}>
                                        <Button><Link href={'tel:+998.88-034-09-12'} target='blank'>+998.88-034-09-12</Link></Button>
                                    </List.Item>
                                </List.Root>
                                <List.Root listStyle={'none'} display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'25px'} fontSize={'15px'}>
                                    <List.Item fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={'5px'}>
                                        <FaTelegram />
                                        Telegram:
                                    </List.Item>
                                    <List.Item>
                                        <Link target='blank' href={'https://t.me/M_Javoxir_1'} >
                                            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                                                <Box width={'50px'} height={'50px'} position={'relative'}>
                                                    <Image className='!rounded-full' src={adminImage} alt={'webcraft image admin image'}></Image>
                                                    <Box position={'absolute'} bottom={'0'} right={'0'} width={'10px'} borderRadius={'100%'} height={'10px'} backgroundColor={'#1BFF00'}></Box>
                                                </Box>
                                                <Box >
                                                    <Text fontSize={'16px'} fontWeight={'bold'}>Javohir Mahmaraimov</Text>
                                                    <Text color={'#2F80ED'}>owner</Text>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link target='blank' href={'https://t.me/M_Javoxir_1'} >
                                            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                                                <Box width={'50px'} height={'50px'} position={'relative'}>
                                                    <Image className='!rounded-full' src={adminImage} alt={'webcraft image admin image'}></Image>
                                                    <Box position={'absolute'} bottom={'0'} right={'0'} width={'10px'} borderRadius={'100%'} height={'10px'} backgroundColor={'#1BFF00'}></Box>
                                                </Box>
                                                <Box >
                                                    <Text fontSize={'16px'} fontWeight={'bold'}>Javohir Mahmaraimov</Text>
                                                    <Text color={'#2F80ED'}>admin</Text>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link target='blank' href={'https://t.me/M_Javoxir_1'} >
                                            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                                                <Box width={'50px'} height={'50px'} position={'relative'}>
                                                    <Image className='!rounded-full' src={adminImage} alt={'webcraft image admin image'}></Image>
                                                    <Box position={'absolute'} bottom={'0'} right={'0'} width={'10px'} borderRadius={'100%'} height={'10px'} backgroundColor={'#1BFF00'}></Box>
                                                </Box>
                                                <Box >
                                                    <Text fontSize={'16px'} fontWeight={'bold'}>Javohir Mahmaraimov</Text>
                                                    <Text color={'#2F80ED'}>project-manager</Text>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </List.Item>
                                </List.Root>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Yopish</Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default CallDialog