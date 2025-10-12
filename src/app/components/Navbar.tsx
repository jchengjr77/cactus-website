'use client'

import { Box, Container, Flex, HStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function Navbar() {
  return (
    <Box bg="brand.background" borderBottom="1px" borderColor="brand.lightGrey" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <ChakraLink display="flex" alignItems="center" gap={2} _hover={{ textDecoration: 'none' }}>
              <Text fontSize="2xl">🌵</Text>
              <Text fontSize="2xl" fontWeight="800" color="brand.green">
                cactus
              </Text>
            </ChakraLink>
          </Link>

          {/* Menu Items */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            <Link href="/resources" passHref legacyBehavior>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
              >
                resources
              </ChakraLink>
            </Link>
            <Link href="/pricing" passHref legacyBehavior>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
              >
                pricing
              </ChakraLink>
            </Link>
            <Link href="/hall-of-fame" passHref legacyBehavior>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.highlight"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
              >
                hall of fame
              </ChakraLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
