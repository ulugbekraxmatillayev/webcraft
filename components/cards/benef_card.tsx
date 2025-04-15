import { Box, Heading, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
export interface childType {
    childId:string;
    childIco:StaticImageData;
    childName:string;
    childTitle:string;
}
function BenefitCard({ childId, childIco, childName, childTitle }: childType) {
    return (
        <Box key={childId} className='benefCard'>
            <Box position={'relative'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} gap={'20px'}>
                <Box className={'bImageBox'} border={'1px solid #BDBDC0'} width={'5vw'}  borderRadius={'10px'}>
                    <Image  className='benefitImage' width={70} height={70} src={childIco} alt=''></Image>
                </Box>
                <Box>
                    <Heading textTransform={'uppercase'} color={'#BDBDC0'} marginY={'20px'} fontSize={'24px'}>{childName}</Heading>
                    <Text fontSize={'17px'}>{childTitle}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default BenefitCard