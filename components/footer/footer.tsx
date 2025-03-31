import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import logo from '../../assets/icons/globe.png'
import Image from 'next/image'
import Link from 'next/link'
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
interface ContactDataType {
  id: number,
  icon: JSX.Element,
  title: string
}

interface data1Type {
  id: number,
  title: string,
  link: string
}
function Footer(): JSX.Element {
  const data1: data1Type[] = [
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

  const data2: data1Type[] = [
    {
      id: 1,
      title: 'Ish namunalari',
      link: '/qadriyatlarimiz'
    },
    {
      id: 2,
      title: 'Mijozlar fikrlari',
      link: '/qadriyatlarimiz'
    }

  ]

  const contactData: ContactDataType[] = [
    {
      id: 1,
      icon: <GrLocation />,
      title: 'O\'zbekiston, Qashqadaryo, Qarshi shahar, Nasaf-ko\'cha, 7-uy.',
    },
    {
      id: 2,
      icon: <MdMailOutline />,
      title: 'info@webcraft.uz'
    },
    {
      id: 3,
      icon: <SlGlobe />,
      title: 'https://webcraft.uz',
    }
  ]
  return (
    <div>


      <Box _dark={{ color: 'white', bg: '#0A0E1E' }} _light={{ bg: 'white', color: 'black' }} borderTop={'1px dashed #e4e4e7'} paddingY={'10px'} paddingTop={'2rem'} marginTop={'10rem'} gap={'4rem'} >
        <Box className='wrapper' display={'grid'} gridTemplateColumns={{ lg: 'auto auto auto auto auto', md: 'auto auto auto', sm: 'auto auto',base:'auto'}} alignItems={{md: 'start', base: 'center'}}>
          {/* for logo */}
          <Box display={'flex'} flexDirection={'column'} gap={'1rem'} paddingX={'2rem'}>
            <Link href={'/'} className='flex items-center cursor-pointer gap-2'>
              <Image src={logo} alt='rasm' width={50} height={50}></Image>
              <p className='!font-bold !text-lg'>
                <span className='!text-[#122fe3]'>Web</span>
                <span className='!text-gray-500'>Craft</span>
              </p>
            </Link>
            <Box>
              <p className='!text-gray-500'>© 2025-2026 WebCraft</p>
            </Box>
            <Box display={'flex'} gap={'15px'} fontSize={'25px'} cursor={'pointer'}>
              <Link href={'https://t.me/'}><FaTelegram /></Link>
              <FaInstagram />
              <FaFacebook />
              <FaGithub />
            </Box>
          </Box>

          {/* list 1 */}
          <Box display={'flex'} flexDirection={'row'} gap={'12rem'}>
            <ul className='flex flex-col gap-4'>
              <li className='title !font-bold !mb-2 !text-lg'>Menyu</li>
              {data1 && data1.length > 0 && data1.map((item, i) => {
                return (
                  <li key={i} className='!ml-5'><Box _hover={{ color: 'red', textDecoration: 'underline' }} transition={'all .5s'}><Link href={item.link}>{item.title}</Link></Box></li>
                )
              })}
            </ul>
          </Box>

          <Box>
            <ul className='flex flex-col gap-4'>
              <li className='title !font-bold !mb-2 !text-lg' style={{ visibility: 'hidden' }}>Menyu</li>
              {data2 && data2.length > 0 && data2.map((item, i) => {
                return (
                  <li key={i}><Box _hover={{ color: 'red', textDecoration: 'underline' }} transition={'all .5s'}><Link href={item.link}>{item.title}</Link></Box></li>
                )
              })}
            </ul>
          </Box>

          {/* list 2 */}
          <Box marginLeft={{lg: '0', base: '2rem'}}>
            <ul className='flex flex-col gap-7'>
              <li className='title !font-bold !mb-2 !text-lg'>Aloqalar</li>
              {contactData && contactData.length > 0 && contactData.map((item, i) => {
                return (
                  <Box display={'flex'} alignItems={'center'}>
                    {item.icon}
                    <li key={i} className='!ml-5 !text-md !font-semibold'><Box >{item.title}</Box></li>
                  </Box>
                )
              })}
            </ul>
          </Box>
          <Box>
            <ul className='flex flex-col gap-5 !font-bold !text-slate-400 !mt-15 !ml-5'>
              <li>(+998) 88 034 09 12</li>
              <li>(+998) 93 818 81 77</li>
              <li>(+998) 88 200 27 72</li>
            </ul>
          </Box>
        </Box>
      </Box>

    </div>
  )
}

export default Footer