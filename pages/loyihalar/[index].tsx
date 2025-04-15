import { projectsData } from '@/items'
import { Box, Button, Heading, Image, Span } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function SortId() {
  const [projectId, setProjectId] = useState<string | null>(null)

  useEffect(() => {
    // Faqat brauzerda ishlaydi
    const id = sessionStorage.getItem('projectId')
    setProjectId(id)
  }, [])

  const filteredProject = projectsData.filter((prev) => prev.id === projectId)
  return (
    <Box marginTop={'60px'}  _dark={{ bg: '#212124' }} _light={{ bg: '#BDBDC0' }}>
      <Box marginRight={{lg: '20px', base: '0'}} >
        <Box>
          {filteredProject.map((item, i) => (
            <Box display={'grid'} gridTemplateColumns={{lg: 'auto auto', base: 'auto'}} gap={0}>
              <Box>
                <Image width={{lg: '50vw',base:'100vw'}} height={'90vh'} src={item.image} alt={'webcraft images project image'}></Image>
              </Box>
              <Box paddingY={'40px'} className='wrapper'>
                <Heading marginBottom={'50px'}>Ma'lumotlar</Heading>
                <Box display={'grid'} gap={'20px'}>
                  <Box cursor={'not-allowed'} borderRadius={'20px'} _hover={{borderRadius: '5px'}} transition={'all .5s'} width={'full'} paddingY={'20px'} _dark={{bg: '#0D161E'}} paddingX={'10px'} display={'flex'} justifyContent={'space-between'} _light={{bg: '#EEF1F6'}} textAlign={'left'} ><Span color={'#2F80ED'}>Loyiha Nomi:</Span> {item.name}</Box>
                  <Box cursor={'not-allowed'} borderRadius={'20px'} _hover={{borderRadius: '5px'}} transition={'all .5s'} width={'full'} paddingY={'20px'} _dark={{bg: '#0D161E'}} paddingX={'10px'} display={'flex'} justifyContent={'space-between'} _light={{bg: '#EEF1F6'}} textAlign={'left'} ><Span color={'#2F80ED'}>Loyiha haqida:</Span> {item.title}</Box>
                  <Box cursor={'not-allowed'} borderRadius={'20px'} _hover={{borderRadius: '5px'}} transition={'all .5s'} width={'full'} paddingY={'20px'} _dark={{bg: '#0D161E'}} paddingX={'10px'} display={'flex'} justifyContent={'space-between'} _light={{bg: '#EEF1F6'}} textAlign={'left'} ><Span color={'#2F80ED'}>Loyiha turi:</Span> {item.type == 'website' ? 'Web Site'  : 'Application'}</Box>
                  <Link target='blank' href={item.link} ><Box borderRadius={'20px'} _hover={{borderRadius: '5px'}} transition={'all .5s'} width={'full'} paddingY={'20px'} _dark={{bg: '#0D161E'}} paddingX={'10px'} display={'flex'} justifyContent={'space-between'} _light={{bg: '#EEF1F6'}} textAlign={'left'} ><Span color={'#2F80ED'}>Mijoz saytini ko'rish:</Span> {item.link}</Box></Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SortId