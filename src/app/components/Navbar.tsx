'use client'

import { useState } from 'react'
import { Box, Container, Flex, HStack, VStack, Text, Link as ChakraLink, IconButton } from '@chakra-ui/react'
import Link from 'next/link'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Box bg="brand.background" borderBottom="1px" borderColor="brand.lightGrey" py={4} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" passHref>
            <ChakraLink display="flex" alignItems="center" gap={2} _hover={{ textDecoration: 'none' }}>
              <Text fontSize="2xl">🌵</Text>
              <Text fontSize="2xl" fontWeight="800" color="brand.green">
                cactus
              </Text>
            </ChakraLink>
          </Link>

          {/* Desktop Menu Items */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            <Link href="/about" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
              >
                about
              </ChakraLink>
            </Link>
            <Link href="/faq" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
              >
                faq
              </ChakraLink>
            </Link>
            <Link href="/pricing" passHref>
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
            <Link href="/hall-of-fame" passHref>
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

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            aria-label="Toggle menu"
            fontSize="24px"
            color="brand.green"
            _hover={{ bg: 'brand.lightGrey' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </IconButton>
        </Flex>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <VStack
            display={{ base: 'flex', md: 'none' }}
            gap={4}
            mt={4}
            pt={4}
            borderTop="1px"
            borderColor="brand.lightGrey"
            align="stretch"
          >
            <Link href="/about" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                about
              </ChakraLink>
            </Link>
            <Link href="/faq" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                faq
              </ChakraLink>
            </Link>
            <Link href="/pricing" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                pricing
              </ChakraLink>
            </Link>
            <Link href="/hall-of-fame" passHref>
              <ChakraLink
                fontSize="md"
                fontWeight="600"
                color="brand.highlight"
                textTransform="uppercase"
                _hover={{ color: 'brand.green' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                hall of fame
              </ChakraLink>
            </Link>
          </VStack>
        )}
      </Container>
    </Box>
  )
}
