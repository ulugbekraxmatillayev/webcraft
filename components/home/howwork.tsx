import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import HeadingTag from '../heading/headingtag'

function HowWork() {
    return (
        <Box marginTop={'160px'} marginBottom={'150px'}>
            <Box className='wrapper'>
                <HeadingTag childText='Qanday Xizmat Ko’rsatasizlar?' />
                <Text textAlign={'center'} marginBottom={'30px'}>Ish uslubimizda dunyoni eng oldi kompaniyalaridan andoza olingan. Loyihangiz uchun jon kuyduruvchilar bilan tanishing</Text>
                <Box display={'grid'} gridTemplateColumns={{lg:'auto auto auto',md:'auto auto', base: 'auto'}} gap={'30px'}> 
                    <Box borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'}  textAlign={'center'} padding={'20px'} paddingY={'60px'} border={'1px dashed'}>
                        <Heading marginBottom={'10px'} fontSize={'25px'}>Loyiha boshqaruvchisi</Heading>
                        <Text>Sizning loyihangiz sifatiga javobgar xodim</Text>
                    </Box>
                    <Box borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'}  textAlign={'center'} padding={'20px'} paddingY={'60px'} border={'1px dashed'}>
                        <Heading marginBottom={'10px'} fontSize={'25px'}>Mutaxassislar</Heading>
                        <Text>Dizayn, marketing, dasturlash sohasidagi mutaxassislar</Text>
                    </Box>
                    <Box borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'}  textAlign={'center'} padding={'20px'} paddingY={'60px'} border={'1px dashed'}>
                        <Heading marginBottom={'10px'} fontSize={'25px'}>Sotuv menejeri</Heading>
                        <Text>Sizni doim ishni ketishidan xabardor qiluvchi xodim</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HowWork