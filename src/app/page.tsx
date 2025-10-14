'use client'

import { Box, Container, Flex, Heading, VStack, Image } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <Box>
      <Navbar />
      {/* Hero Section */}
      <Box bg="brand.background" py={{ base: 32, md: 0 }} minH={{ base: "auto", md: "calc(100vh - 100px)" }} display={{ base: "block", md: "flex" }} alignItems={{ base: "flex-start", md: "center" }}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }} w="full">
          <VStack gap={{ base: 12, md: 24 }} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "6xl", sm: "6xl", md: "8xl", lg: "9xl" }}
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

      {/* How It Works Section */}
      <Box bg="brand.background" py={{ base: 16, md: 40 }} borderTop="1px" borderColor="brand.lightGrey" minH={{ base: "auto", md: "100vh" }} display={{ base: "block", md: "flex" }} alignItems={{ base: "flex-start", md: "center" }}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }} w="full">
          <VStack gap={{ base: 12, md: 20 }}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="600"
              color="brand.green"
              textAlign="center"
            >
              how it works
            </Heading>

            {/* Content: Screenshot and Description Side by Side */}
            <VStack gap={{ base: 8, md: 12 }} w="full">
              {/* Description - Mobile First */}
              <VStack gap={6} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} w="full" display={{ base: "flex", md: "none" }}>
                <Box fontSize={{ base: "lg", md: "lg" }} color="brand.green" lineHeight="1.8" fontWeight={400}>
                  staying connected to your friends&family should be easy.
                </Box>
              </VStack>

              <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 8, md: 16 }}
                align="center"
                justify="center"
                w="full"
              >
                {/* Screenshot */}
                <Box
                  w={{ base: "200px", md: "320px" }}
                  flexShrink={0}
                >
                  <Image
                    src="/screenshots/home.PNG"
                    alt="Cactus app home screen"
                    width={{ base: 200, md: 320 }}
                    height="auto"
                    borderRadius="xl"
                    border="2px solid"
                    borderColor="brand.green"
                  />
                </Box>

                {/* Description - Desktop */}
                <VStack gap={6} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} maxW={{ base: "full", md: "lg" }}>
                  <Box fontSize={{ base: "lg", md: "xl" }} color="brand.green" lineHeight="1.8" fontWeight={400} display={{ base: "none", md: "block" }}>
                    staying connected to your friends&family should be easy.
                  </Box>
                  <Box fontSize={{ base: "lg", md: "xl" }} color="brand.green" lineHeight="1.8" fontWeight={500}>
                   🌵 add people to groups <br />
                   📝 share updates on a schedule <br />
                   🔥 earn rewards through consistency<br />
                  </Box>
                </VStack>
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Bottom Waitlist Section */}
      <Box bg="brand.background" py={{ base: 16, md: 20 }} borderTop="1px" borderColor="brand.lightGrey">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack gap={8} textAlign="center">
            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="600"
              color="brand.green"
            >
              your people are waiting
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
