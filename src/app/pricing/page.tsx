'use client'

import { Box, Container, Heading, VStack, Text, Flex, Image } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { WaitlistForm } from '../components/WaitlistForm'
import { DecorativeLayout } from '../components/DecorativeLayout'

export default function Pricing() {
  return (
    <Box>
      <Navbar />
      <DecorativeLayout>
      <Box bg="brand.background" py={{ base: 16, md: 24 }} position="relative">
        <Container maxW="container.md" px={{ base: 4, md: 6 }} mx="auto">
          <VStack gap={{ base: 8, md: 10 }} align="stretch">
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "6xl" }}
              fontWeight="700"
              color="brand.green"
              textAlign="center"
            >
              pricing
            </Heading>

            {/* Description */}
            <Box textAlign="center">
              <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" opacity={0.8}>
                we think you should start with green; you may upgrade to gold anytime
              </Text>
            </Box>

            {/* Pricing Cards */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 8, md: 12 }}
              justify="center"
              align={{ base: "stretch", md: "flex-start" }}
              mt={{ base: 2, md: 4 }}
            >
              {/* Green Tier - Free */}
              <Box
                flex={1}
                maxW={{ base: "full", md: "400px" }}
                border="2px solid"
                borderColor="brand.green"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                bg="brand.background"
              >
                <VStack align="stretch" gap={6}>
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: "3xl", md: "4xl" }}
                      fontWeight="700"
                      color="brand.green"
                      mb={2}
                    >
                      green
                    </Heading>
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" color="brand.green">
                      free
                    </Text>
                  </Box>

                  <VStack align="flex-start" gap={3}>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                      <b>all core features</b>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                      join up to <b>4 groups</b>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                      access to select <b>cactus rewards</b>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                      attach up to <b>5 photos per update</b>
                    </Text>
                  </VStack>
                </VStack>
              </Box>

              {/* Gold Tier - Paid */}
              <Box
                flex={1}
                maxW={{ base: "full", md: "400px" }}
                border="2px solid"
                borderColor="brand.highlight"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                bg="brand.background"
                position="relative"
              >
                <Box
                  position="absolute"
                  top={-3}
                  right={6}
                  bg="brand.highlight"
                  color="brand.background"
                  px={3}
                  py={1}
                  borderRadius="md"
                  fontSize="sm"
                  fontWeight="700"
                >
                  PREMIUM
                </Box>
                <VStack align="stretch" gap={6}>
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: "3xl", md: "4xl" }}
                      fontWeight="700"
                      color="brand.darkGold"
                      mb={2}
                    >
                      gold
                    </Heading>
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" color="brand.darkGold">
                      (tba)
                    </Text>
                  </Box>

                  <VStack align="flex-start" gap={3}>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      <strong>everything in green</strong>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      increased photo/video upload limits
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      increased group limits
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      access to <b>all cactus rewards</b>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      receive <b>custom group merch</b>
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} color="brand.darkGold" lineHeight="1.8">
                      <b>hall of fame</b> opportunities
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </Flex>
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
      </DecorativeLayout>
    </Box>
  )
}
