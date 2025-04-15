import { Box, Button, Heading, Span } from '@chakra-ui/react';
import RadioCard from '../radio/radio-card';
import { projectCount } from '@/items';
import { MdCalculate } from 'react-icons/md';
import { useState } from 'react';
import HeadingTag from '../heading/headingtag';

function Count() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  }
  return (
    <Box>
      <Box>
        <HeadingTag childText={'saytingizni xisoblang'}/>
        <Box className='wrapper'>
          {projectCount.map((item, index) => (
            <RadioCard key={index} items={item.options} label={item.label} id={item.id} />
          ))}
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Button  loading={loading} onClick={handleClick}  loadingText={'Kutilmoqda...'} width={'25vw'} variant={'surface'}>
            <MdCalculate />
            <Span>Hisoblash</Span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Count;
