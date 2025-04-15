import { moreInformation } from '@/items'
import { Box, Heading } from '@chakra-ui/react'
import { JSX } from 'react'

interface moreInformationType {
  id: string
  quizId: string
  name: string
  information: string
}

function Index(): JSX.Element {
  const moreInfo: moreInformationType[] = moreInformation
  return (
    <Box marginTop={'60px'}>
      <Box marginTop={'100px'} className='wrapper'>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Heading fontSize={'4xl'} marginBottom={'40px'}>Ma'lumotlar</Heading>
        </Box>
        <Box>
          {moreInfo.map((item) => (
            <Box
              id={item.quizId}
              key={item.id}
              marginBottom={'38px'}
              paddingBottom={'20px'}
              _light={{ borderBottom: '1px solid #0D161E' }}
              _dark={{ borderBottom: '1px solid #EEF1F6' }}
            >
              <Heading fontSize={'3xl'} fontStyle={'italic'} marginBottom={'25px'} color={'#2F80ED'}>
                {item.id}. {item.name}
              </Heading>
              <div className='more_items !ml-[2vw]' dangerouslySetInnerHTML={{ __html: item.information }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Index
