import { Box, Heading, Span } from '@chakra-ui/react'
import React, { JSX } from 'react'
import Accordion from '../accordion/accordion'
import { questions } from '@/items'
import HeadingTag from '../heading/headingtag'

function Question(): JSX.Element {
  
  return (
    <Box>
        <Box>
            <HeadingTag childText='sizni qiynagan savollar'/>
            <Box className='wrapper'>
              {questions.map((item, i) => {
                return(
                  <Accordion childLink={item.more} childId={item.id} childQuiz={item.question}  childAnswer={item.answer}/>
                )
              })}
            </Box>
        </Box>
    </Box>
  )
}

export default Question