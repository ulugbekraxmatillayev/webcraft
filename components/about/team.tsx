import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import team from '@/assets/images/team.png'
import MiniCard from '../cards/mini-card'
import { teamCard } from '@/items'
import HeadingTag from '../heading/headingtag'

function Team() {
  return (
    <Box marginY={'30px'}>
      <HeadingTag childText='jamoamiz haqida'/>
      <Box display={'grid'} gridTemplateColumns={{md: 'auto auto', base: 'auto'}} justifyContent={'center'} alignItems={'center'} className='wrapper'>
        <Box>
          <Image width={600} height={600} src={team} alt='webcraft team image'></Image>
        </Box>
        <Box>
          <Text textAlign={{md: 'left', base: 'center'}} marginBottom={{md: '0', base: '30px'}} lineHeight={'40px'} fontSize={'xl'}>Bizning jamoada har bir xodimning o'z o'rni bor. Xar biri o'z ishining ustasi va mutaxxassis xisoblanadi. Shu kungacha biror bir loyihada <i className='text-[#2F80ED] !font-bold !italic'>WebCraft</i> xodimlari kompaniyamizni uyaltirib qo'ymagan.</Text>
        </Box>
      </Box>

      <Box display={'grid'} gridTemplateColumns={{xl: 'auto auto auto auto', lg: 'auto auto',base: 'auto'}} gap={{xl: '0px', base: '20px'}} justifyContent={'space-around'} className='wrapper'>
        {teamCard.map((item, i) => {
          return (
            <MiniCard key={i} childImage={item.url} childNum={item.nums} childTitle={item.title} />
          )
        })}
      </Box>
    </Box>
  )
}

export default Team