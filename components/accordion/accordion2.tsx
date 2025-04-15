import { Accordion, Box, Heading, Icon, Span, Stack } from "@chakra-ui/react"
import { JSX, ReactNode } from "react"
import { LuChartBarStacked, LuTags } from "react-icons/lu"

interface ItemTypes {
    itemId: string
    itemValue: string
    itemTitle: string
    itemIcon: ReactNode
    itemContent: string
}
function Accordion2({ itemId, itemValue, itemTitle, itemIcon, itemContent }: ItemTypes): JSX.Element {
    return (
        <Stack width="full" maxW="full">
            <Accordion.Root collapsible defaultValue={["info"]}>
                <Accordion.Item key={itemId} value={itemValue}>
                    <Accordion.ItemTrigger paddingY={'20px'}>
                        <Icon fontSize="2xl" color="fg.subtle">
                            {itemIcon}
                        </Icon>
                        <Span fontSize={'xl'}>{itemTitle}</Span>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Box
                                _light={{bg: '#bdbdc0'}}
                                _dark={{bg: '#212124'}} // Apply background color based on the current color mode
                                padding={'20px'}
                                borderRadius={'8px'}
                            >
                                <div
                                    className="content"
                                    dangerouslySetInnerHTML={{ __html: itemContent }}
                                />
                            </Box>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </Stack>
    )
}

export default Accordion2


