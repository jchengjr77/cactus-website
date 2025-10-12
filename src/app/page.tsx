'use client'

import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <Box>
      <Navbar />
      {/* Hero Section */}
      <Box bg="brand.background" py={{ base: 24, md: 40 }}>
        <Container maxW="container.xl">
          <VStack gap={20} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl" }}
              fontWeight="600"
              color="brand.green"
            >
              water your friendships.
            </Heading>
            <Box>
              <WaitlistForm />
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
