'use client'

import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <Box>
      <Navbar />
      {/* Hero Section */}
      <Box bg="brand.background" py={{ base: 32, md: 40 }}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 12, md: 20 }} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "6xl", sm: "6xl", md: "7xl" }}
              fontWeight="600"
              color="brand.green"
              px={{ base: 4, md: 0 }}
              lineHeight={{ base: "1.2", md: "1.1" }}
              display={{ base: "flex", md: "block" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box as="span" display={{ base: "block", md: "inline" }}>water your</Box>
              {' '}
              <Box as="span" display={{ base: "block", md: "inline" }}>friendships.</Box>
            </Heading>
            <Box w="full" px={{ base: 4, md: 0 }}>
              <WaitlistForm />
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
