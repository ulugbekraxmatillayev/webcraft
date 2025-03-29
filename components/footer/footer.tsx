import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import logo from '../../assets/icons/globe.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer(): JSX.Element {
  const data1 = [
    {
      id: 1,
      title: 'Qadriyatlarimiz',
      link: '/qadriyatlarimiz'
    },
    {
      id: 2,
      title: 'WebCraft haqida',
      link: '/biz-haqimizda'
    },
    {
      id: 3,
      title: 'Bizga qo\'shiling',
      link: '/jamoaga-qo\'shiling'
    },
    {
      id: 4,
      title: 'Aloqa',
      link: '/aloqa'
    },
    {
      id: 5,
      title: 'Foydalanish shartlari',
      link: '/foydalanish-shartlari'
    }
  ]
  return (
    <div>


      <Box _dark={{ color: 'white' }} _light={{ bg: 'white', color: 'black' }} borderTop={'1px solid #e4e4e7'} paddingY={'10px'} display={'flex'} flexDirection={'row'} gap={'4rem'}>
        {/* for logo */}
        <Box display={'flex'} flexDirection={'column'} gap={'1rem'} paddingX={'2rem'}>
          <Box className='flex items-center cursor-pointer gap-2'>
            <Image src={logo} alt='rasm' width={50} height={50}></Image>
            <p className='!font-bold !text-lg'>
              <span className='!text-[#122fe3]'>Web</span>
              <span className='!text-gray-500'>Craft</span>
            </p>
          </Box>
          <Box>
            <p className='!text-gray-500'>© 2025-2026 WebCraft</p>
          </Box>
        </Box>

        {/* list 1 */}
        <Box>
          <ul className='flex flex-col gap-2'>
            <li className='title !font-semibold !mb-2'>Menyu</li>
            {data1 && data1.length > 0 && data1.map((item, i) => {
              return (
                <li><Box _hover={{color: 'red', textDecoration: 'underline'}} transition={'all .5s'}><Link href={item.link}>{item.title}</Link></Box></li>
              )
            })}
          </ul>
        </Box>

        {/* list 2 */}
        <Box></Box>

        {/* list 3 */}
        <Box></Box>
      </Box>

    </div>
  )
}

export default Footer