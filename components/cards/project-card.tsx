import { Box, Button } from "@chakra-ui/react";
import { JSX, ReactNode } from "react";
import { Badge, Stack } from "@chakra-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"
interface PropsType {
    childImg: string,
    childName: string,
    childTitle: string
    childType: string
    handleClick: () => void,
}

function ProjectCard({ childImg, childName, childTitle,childType,handleClick }: PropsType): JSX.Element {

    return (
        <Box  position={'relative'}>
            <Stack padding={'20px'} position={'absolute'} zIndex={'1'} align="flex-start">
                {childType == 'webapp' ? (<Badge variant="solid" colorPalette="blue">
                    <HiStar />
                    Application
                </Badge>) :
                (<Badge variant="solid" colorPalette="green">
                    Website
                    <HiAtSymbol />
                </Badge>)}
            </Stack>
            <Box onClick={handleClick} cursor={'pointer'} _dark={{ color: 'white' }} width={{xl: '30vw',lg: '45vw', base: '90vw'}} className="carder text-center animate-moving-border-2  !border !h-[500px] !shadow-sm">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>

                <Box display={'flex'} justifyContent={'center'} padding={'10px'}>

                    <Box width={'100%'} height={'350px'} objectFit={'cover'}>

                        <img className="!rounded-t-lg !border !w-full !h-full" src={childImg} alt="" />
                    </Box>
                </Box>
                <div className="!p-5">

                    <a href="#">
                        <h5 className="!mb-5 !text-2xl !font-bold !tracking-tight ">{childName}</h5>
                    </a>
                    <p className="!mb-3 !font-normal card_title" title={childTitle}>{childTitle}</p>

                </div>
            </Box>
        </Box>
    );
}

export default ProjectCard;

