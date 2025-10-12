'use client'

import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'

export default function FAQ() {
  return (
    <Box>
      <Navbar />
      <Box bg="brand.background" py={{ base: 32, md: 40 }} minH="80vh">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack gap={8} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="600"
              color="brand.green"
            >
              faq
            </Heading>
            <Box fontSize={{ base: "lg", md: "xl" }} color="brand.green" opacity={0.8}>
              coming soon...
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
