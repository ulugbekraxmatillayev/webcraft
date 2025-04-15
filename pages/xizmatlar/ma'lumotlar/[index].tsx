// pages/xizmatlar/[id].tsx

import { Box, Button, Image, Container, Grid, Heading, List, ListItem, Separator, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { services } from '@/items';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeadingTag from '@/components/heading/headingtag';

function ServicesOne() {
  const router = useRouter();
  const [service, setService] = useState<any>(null);
  useEffect(() => {
    const id = localStorage.getItem('servicesId');
    console.log(id)
    if (id) {
      const selectedService = services.find((srv) => srv.id === id);
      setService(selectedService);
    }
  }, []);

  if (!service) {
    return <Box textAlign="center" mt="20">Yuklanmoqda...</Box>;
  }

  return (
    <Box marginTop={'60px'} py={{ base: '10', md: '20' }}>
      <Box className='wrapper'>
        {/* 1. Hero section */}
        <Box mb="20" textAlign="center">
          <HeadingTag childText={service.name} />
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">{service.description}</Text>
        </Box>

        {/* 2. Image Section */}
        <Box width="full" border={'1px solid'} borderRadius={'18px'} mb="20">
          <Image width={'full'} height={{ base: '250px', md: '600px' }} src={service.detailImage || service.image} alt={service.name} style={{ objectFit: 'cover', borderRadius: '16px' }} />
        </Box>

        {/* 3. Service Benefits */}
        <Stack mb="20" textAlign="center">
          <HeadingTag childText='Xizmat Foydalari'/>
          <List.Root listStyle={'none'} mx="auto" maxW="lg">
            {service.benefits?.map((benefit: string, index: number) => (
              <ListItem key={index}>{benefit}</ListItem>
            ))}
          </List.Root>
        </Stack>

        <Separator />

        {/* 4. Qo'shimcha Tavsiyalar */}
        <Stack mb="20" textAlign="center">
          <Heading size="lg">Qo'shimcha Tavsiyalar</Heading>
          <List.Root mx="auto" maxW="lg">
            {service.tips?.map((tip: string, index: number) => (
              <ListItem key={index}>💡 {tip}</ListItem>
            ))}
          </List.Root>
        </Stack>

        {/* 5. Galereya */}
        <Box mb="20">
          <Heading size="lg" mb="6" textAlign="center">Galereya</Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            {[service.image, service.detailImage, service.image].map((img, index) => (
              <Box key={index} position="relative" height="250px">
                <Image src={img} alt={`Galereya ${index + 1}`} style={{ objectFit: 'cover', borderRadius: '12px' }} />
              </Box>
            ))}
          </Grid>
        </Box>

        {/* 6. Pricing Section */}
        <Box mb="20" textAlign="center">
          <Heading size="lg" mb="4">Narxlar</Heading>
          <Text fontSize="lg" color="gray.600">{service.price || 'Narx kelishiladi'}</Text>
        </Box>

        {/* 7. Testimonial Section */}
        <Box mb="20" textAlign="center">
          <Heading size="lg" mb="6">Mijozlar fikri</Heading>
          <Text maxW="xl" mx="auto" color="gray.500">"{service.testimonial || 'Juda yaxshi xizmat!'}"</Text>
        </Box>

        {/* 8. FAQs Section */}
        <Box mb="20">
          <Heading size="lg" mb="6" textAlign="center">Ko'p so'raladigan savollar</Heading>
          <Stack maxW="xl" mx="auto">
            {['Xizmat qancha davom etadi?', 'Qanday kafolat bor?', 'To\'lov usullari qanday?'].map((faq, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="gray.50">
                <Text fontWeight="bold">{faq}</Text>
                <Text color="gray.600">{service.faqAnswer || 'Bizning xizmatimiz tezkor va sifatli!'}</Text>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* 9. Call to Action */}
        <Box textAlign="center" mb="20">
          <Link href="/buyurtma">
            <Button size="lg" colorScheme="blue">Buyurtma berish</Button>
          </Link>
        </Box>

        {/* 10. Location / Contact Section */}
        <Box textAlign="center">
          <Heading size="lg" mb="4">Biz bilan bog'laning</Heading>
          <Text color="gray.600">Telefon: +998 90 123 45 67</Text>
          <Text color="gray.600">Manzil: Toshkent, O'zbekiston</Text>
        </Box>

      </Box>
    </Box>
  );
}

export default ServicesOne;