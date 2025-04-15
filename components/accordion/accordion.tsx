import {AccordionRoot,Span, Text, Box, AccordionItem, AccordionItemTrigger, AccordionItemIndicator, AccordionItemContent, AccordionItemBody, Button} from '@chakra-ui/react'
import Link from 'next/link'
import React, { JSX } from 'react'

interface childAccordionProps {
    childId: string
    childQuiz: string
    childAnswer: string
    childLink: string
}
function Accordion({childAnswer,childQuiz,childId,childLink}: childAccordionProps): JSX.Element {
    return (
        <Box>
            <AccordionRoot border={'1px solid #EEF1F6'} borderRadius={'5px'} variant={'subtle'} collapsible defaultValue={["b"]}>
                    <AccordionItem value={childQuiz} paddingY={'10px'}>
                        <AccordionItemTrigger>
                            <Span flex="1" fontStyle={'italic'} fontSize={{xl:'xl',md: 'md', lg: 'lg',sm:'sm',base:'14px'}}><Span fontStyle={'normal'}>{childId}.</Span> {childQuiz}</Span>
                            <AccordionItemIndicator />
                        </AccordionItemTrigger>
                        <AccordionItemContent>
                            <AccordionItemBody fontSize={{xl:'16px',sm:'14px',base: '11px'}}>{childAnswer}</AccordionItemBody>
                            <Link href={childLink+childId}>Batafsil</Link>
                        </AccordionItemContent>
                    </AccordionItem>
            </AccordionRoot>
        </Box>
    )
}

export default Accordion