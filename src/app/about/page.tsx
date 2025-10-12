'use client'

import { Box, Container, Heading, VStack, Text, Link as ChakraLink, Flex } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box bg="brand.background" py={{ base: 16, md: 24 }}>
        <Container maxW="100%" px={{ base: 4, md: 0 }}>
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

            {/* Three Equal Column Grid */}
            <Box display={{ base: "flex", md: "grid" }} gridTemplateColumns={{ md: "1fr 1fr 1fr" }} flexDirection="column" gap={{ base: 12, md: 0 }} w="full">
              {/* Left Column - How to Use */}
              <Box display="flex" justifyContent="flex-end" alignItems="flex-start" px={{ md: 4 }}>
                <VStack gap={6} align="stretch" w="full" maxW={{ base: "full", md: "320px" }}>
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
              </Box>

              {/* Center Column - Screenshot */}
              <Box display="flex" justifyContent="center" alignItems="flex-start" px={{ md: 4 }}>
                <Box
                  w={{ base: "220px", md: "280px" }}
                  aspectRatio={9/16}
                  bg="brand.lightGrey"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px"
                  borderColor="brand.green"
                  borderStyle="dashed"
                  flexShrink={0}
                >
                  <VStack gap={2}>
                    <Box fontSize="3xl">📱</Box>
                    <Box fontSize="xs" color="brand.green" fontWeight="600" px={2} textAlign="center">
                      screenshot
                    </Box>
                  </VStack>
                </Box>
              </Box>

              {/* Right Column - Points & Rewards */}
              <Box display="flex" justifyContent="center" alignItems="flex-start" px={{ md: 4 }} mt={{ base: 0, md: 48 }}>
                <VStack gap={6} align="stretch" w="full" maxW={{ base: "full", md: "320px" }}>
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
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
