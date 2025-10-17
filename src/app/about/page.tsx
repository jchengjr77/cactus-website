'use client'

import { Box, Container, Heading, VStack, Text, Link as ChakraLink, Image } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { WaitlistForm } from '../components/WaitlistForm'
import Link from 'next/link'

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box bg="brand.background" py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="container.lg" px={{ base: 4, md: 6 }} mx="auto">
          <VStack gap={{ base: 12, md: 16 }} align="stretch">
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "6xl" }}
              fontWeight="700"
              color="brand.green"
              textAlign="center"
            >
              about
            </Heading>

            {/* Two Column Grid */}
            <Box display={{ base: "flex", md: "grid" }} gridTemplateColumns={{ md: "1fr 1fr" }} flexDirection="column" gap={{ base: 12, md: 8 }} w="full">
              {/* Left Column - Screenshot */}
              <Box display="flex" justifyContent={{ base: "center", md: "flex-end" }} alignItems="flex-start" pr={{ md: 4 }}>
                <Box
                  w={{ base: "220px", md: "320px" }}
                  flexShrink={0}
                >
                  <Image
                    src="/screenshots/groups.PNG"
                    alt="Cactus app groups screen"
                    width={{ base: 220, md: 320 }}
                    height="auto"
                    borderRadius="xl"
                    border="2px solid"
                    borderColor="brand.green"
                  />
                </Box>
              </Box>

              {/* Right Column - Text Sections */}
              <VStack gap={8} align="stretch" maxW={{ base: "full", md: "400px" }}>
                {/* How to Use Section */}
                <VStack gap={6} align="stretch">
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "2xl" }}
                    fontWeight="500"
                    color="brand.green"
                  >
                    how to use <b>cactus</b>
                  </Heading>
                  <Box>
                    <Text fontSize={{ base: "md", md: "md" }} color="brand.green" lineHeight="1.8">
                      create a <strong>group</strong> with your friends.<br />
                      set a <strong>cadence</strong> for posting updates. <br />
                      post your <strong>updates</strong> (preferably on time). <br />
                      interact with your group to earn <strong>points</strong>. <br />
                    </Text>
                  </Box>
                </VStack>

                {/* Points & Rewards Section */}
                <VStack gap={6} align="stretch">
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "2xl" }}
                    fontWeight="500"
                    color="brand.green"
                  >
                    points and rewards
                  </Heading>
                  <Box>
                    <Text fontSize={{ base: "md", md: "md" }} color="brand.green" lineHeight="1.8" mb={2}>
                      earn <strong>points</strong> by staying active and consistent with your group. unlock exclusive <strong>rewards</strong> like emoji packs, custom themes, and even physical merch.
                    </Text>
                    <ChakraLink asChild fontSize="sm" fontWeight="400" color="brand.green" _hover={{ color: 'brand.vibrantGreen' }}>
                      <Link href="/faq#earn-points">learn more</Link>
                    </ChakraLink>
                  </Box>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Bottom Waitlist Section */}
      <Box bg="brand.background" py={{ base: 16, md: 20 }} borderTop="1px" borderColor="brand.lightGrey" position="relative">
        <Container maxW="container.md" px={{ base: 4, md: 6 }} mx="auto">
          <VStack gap={4} textAlign="center">
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="600"
              color="brand.green"
            >
              ready to get started?
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
