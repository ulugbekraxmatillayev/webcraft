import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Accordion2 from '../accordion/accordion2'
import { workOrderData } from '@/items'
import HeadingTag from '../heading/headingtag'

function WorkOrder() {
    return (
        <Box marginBottom={'50px'}>
            <Box className='wrapper'>
                <HeadingTag childText={'ish tartibi'} />
                <Box>
                    <Heading size="lg" marginBottom={'20px'} textAlign={'center'}>
                        Biz mijozlar tomonidan olingan xar bir loyihani shu tartibda yaratamiz,
                        WebCraft kompaniyasi loyihalarni qanday tartibda yaratishi haqida qisqacha ma'lumotlar berib o'tamiz:
                    </Heading>
                    {workOrderData.map((item, i) => {
                        return (
                            <Accordion2 key={i} itemId={item.id} itemValue={item.value} itemIcon={item.icon} itemTitle={item.title} itemContent={item.content} />
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default WorkOrder