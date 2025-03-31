import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { JSX, ReactNode } from "react";

interface PropsType {
    childImg: string,
    childName: string,
    childTitle: string
}

function ProductCard({ childImg, childName, childTitle }: PropsType): JSX.Element {
    return (
        <Box >

            <Box _dark={{ color: 'white' }} className="carder text-center animate-moving-border-2 !max-w-sm !border !h-[400px] !shadow-sm">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <Box display={'flex'} justifyContent={'center'}  padding={'10px'}>
                    <Box width={'200px'} height={'150px'} objectFit={'cover'}>
                        <img className="!rounded-t-lg !border !w-full !h-full" src={childImg} alt="" />
                    </Box>
                </Box>
                <div className="!p-5">
                    <a href="#">
                        <h5 className="!mb-5 !text-2xl !font-bold !tracking-tight ">{childName}</h5>
                    </a>
                    <p className="!mb-3 !font-normal card_title" title={childTitle}>{childTitle}</p>
                    <Link href={'/'} className="!inline-flex !items-center !px-3 !py-2 !text-sm !font-medium !text-center !text-white !bg-[#2F80ED] !rounded-lg !hover:bg-blue-800 !focus:ring-4 !focus:outline-none !focus:ring-blue-300">
                        Batafsil
                        <svg className="!rtl:rotate-180 !w-3.5 !h-3.5 !ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </Box>
        </Box>
    );
}

export default ProductCard;

