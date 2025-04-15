import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { JSX, useRef } from 'react'
import HeadingTag from '../heading/headingtag'
import imageSeo from '@/assets/images/with_or_out_seo.png'
import Image from 'next/image'
import FormDialog from '../dialog/dialog'
import Link from 'next/link'

function AboutSeo(): JSX.Element {
    const imageRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        const { current: imageBox } = imageRef
        if (!imageBox) return

        const rect = imageBox.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        const rotateX = (-y / 20).toFixed(2)
        const rotateY = (x / 20).toFixed(2)

        imageBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
        const { current: imageBox } = imageRef
        if (imageBox) {
            imageBox.style.transform = 'rotateX(0deg) rotateY(0deg)'
        }
    }
    return (
        <Box
            position="relative"
            marginTop="70px"
            marginBottom="70px"
            _dark={{ bg: '#0D161E' }}
            _light={{ bg: '#EEF1F6' }}
            paddingY="50px"
        >
            <Box className="wrapper">
                <Box>
                    <HeadingTag childText="SEO haqida" />
                </Box>
                <Box display="grid" gridTemplateColumns={{lg: "auto auto",base:'auto'}} gap="20px">
                    <Box>
                        <Heading marginBottom={'30px'} fontSize={'30px'}>SEO qilinmagan sayt – <i className='!text-[#2F80ED]'>Qurigan daraxt</i></Heading>
                        <Text marginBottom={'60px'} width={{lg:'40vw',base:'100%'}} lineHeight={'35px'} fontSize={'18px'}>
                            Saytingiz foyda olib kelmayaptimi? Uni tez SEO qilish kerak.
                            Google reklamadan farqli olaroq ko'p yillik barqaroq daromad
                            olasiz. Aynan sizga SEO marketing qancha foyda keltirishini
                            oldindan taxminan hisoblab berishimiz mumkin. Bu bepul, hoziroq
                            murojaat qiling.
                        </Text>
                        <Box display={'grid'} gridTemplateColumns={'auto auto'} gap={'25px'}>
                            <FormDialog children={<Button>SEO dan daromadni baholash</Button>} />
                            <Link href='/savollar-va-javoblar/4' className='!underline !hover:text-[#2F80ED] !font-bold'>SEO haqida batafsil</Link>
                        </Box>
                    </Box>
                    <Box
                        ref={imageRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="image-container seoImage"
                        padding="20px"
                        borderRadius="20px"
                        border="1px solid"
                        position="relative"
                        overflow="hidden"
                    >
                        <Image className='!h-[50vh]' src={imageSeo} alt="with_or_whithout_seo" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutSeo
