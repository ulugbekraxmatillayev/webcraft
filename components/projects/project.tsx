import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../cards/project-card'
import { projectsData } from '@/items'
import { useRouter } from 'next/router'
import HeadingTag from '../heading/headingtag'

function Project() {
    const router = useRouter()

    function handleClick(id: string) {
        sessionStorage.setItem('projectId', id)
        router.push(`/loyihalar/${id}`)
    }

    const isHomePage = router.pathname === '/'
    const displayedProjects = isHomePage ? projectsData.slice(0, 3) : projectsData

    return (
        <Box marginBottom={'30px'}>
            <Box className='wrapper'>
                <HeadingTag childText='loyihalarimiz' />
                <Box
                    display={'grid'}
                    justifyContent={'center'}
                    gridTemplateColumns={{ xl: 'auto auto auto', lg: 'auto auto', base: 'auto' }}
                    gap={'15px'}
                >
                    {displayedProjects.map((item, i) => (
                        <ProjectCard
                            handleClick={() => handleClick(item.id)}
                            childType={item.type}
                            key={i}
                            childImg={item.image}
                            childName={item.name}
                            childTitle={item.title}
                        />
                    ))}
                </Box>

                {isHomePage && (
                    <Box textAlign="center" marginTop="20px">
                        <Button colorScheme="blue" onClick={() => router.push('/loyihalar')}>
                            Barchasini ko‘rish
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Project
