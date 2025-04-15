import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { JSX, ReactNode, useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
interface PropsType {
    childImg: string,
    childName: string,
    childTitle: string;
    childId: string
}

function ProductCard({ childId, childImg, childName, childTitle }: PropsType): JSX.Element {
    const router = useRouter()
    function handleChange() {
        localStorage.setItem('servicesId', childId)
    }
    return (
        <Box >

            <Box cursor={'pointer'} _dark={{ color: 'white' }} className="carder text-center animate-moving-border-2 !max-w-sm !border !h-[400px] !shadow-sm">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <Box display={'flex'} justifyContent={'center'} padding={'10px'}>
                    <Box width={'200px'} height={'150px'} objectFit={'cover'}>
                        <img className="!rounded-t-lg !border !w-full !h-full" src={childImg} alt="" />
                    </Box>
                </Box>
                <div className="!p-5">
                    <a href="#">
                        <h5 className="!mb-5 !text-2xl !font-bold !tracking-tight ">{childName}</h5>
                    </a>
                    <p className="!mb-3 !font-normal card_title" title={childTitle}>{childTitle}</p>
                    <Button
                        overflow={'hidden'}
                        className={'cardBtn'}
                        position={'relative'}
                        width={'150px'}
                        display="inline-flex"
                        alignItems="center"
                        px="3"
                        py="2"
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                        color="white"
                        bg="#2F80ED"
                        borderRadius="lg"
                        _hover={{ bg: "blue.800" }}
                        _focus={{
                            ring: 4,
                            outline: "none",
                            ringColor: "blue.300",
                        }} onClick={() => ((router.push(`/xizmatlar/ma'lumotlar/${childId}`)), handleChange())}>
                        <Box position={'absolute'} className="leftItem" display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <FaAnglesRight />
                        </Box>
                        <Box className="rightItem" transition={'all .3s'} position={'absolute'} display={'flex'} alignItems={'center'} gap={'5px'}>
                            Batafsil
                            <svg className="!rtl:rotate-180 !w-3.5 !h-3.5 !ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Box>
                    </Button>
                </div>
            </Box>
        </Box>
    );
}

export default ProductCard;

