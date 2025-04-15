import { Avatar, Box, Card, For, Stack } from "@chakra-ui/react"
import React, { JSX, ReactNode } from 'react'
interface childProps {
    childImage: string
    childTitle: string
    childNum: string
}
function MiniCard({ childImage, childNum, childTitle }: childProps): JSX.Element {
    return (
        <Box>
            <Stack gap="4" direction="row" wrap="wrap" className="wrapper">
                <For each={["outline"]}>

                    {(variant) => (
                        <Card.Root width={{xl: "280px", lg: '450px', md: '90vw', base: '75vw'}} height={'160px'} className="carder animate-moving-border-2" variant={variant} key={variant}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <Card.Body gap="2"> 
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Card.Title mb="2" fontSize={'2xl'}>{childNum}</Card.Title>
                                    <Avatar.Root size="lg" shape="rounded">
                                        <Avatar.Image src={childImage} alt={'webcraft'} />
                                        <Avatar.Fallback name={childNum} />
                                    </Avatar.Root>
                                </Box>
                                <Card.Description fontSize={'lg'}>
                                    {childTitle}
                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                    )}
                </For>

            </Stack>
        </Box>
    )
}

export default MiniCard