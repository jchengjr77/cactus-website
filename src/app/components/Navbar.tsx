'use client'

import { useState } from 'react'
import { Box, Container, Flex, HStack, VStack, Text, Link as ChakraLink, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa6'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Box bg="brand.background" borderBottom="1px" borderColor="brand.lightGrey" py={4} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <ChakraLink asChild display="flex" alignItems="center" gap={2} _hover={{ textDecoration: 'none' }}>
            <Link href="/">
              <Text fontSize="2xl">🌵</Text>
              <Text fontSize="2xl" fontWeight="800" color="brand.green" style={{ fontWeight: 800 }}>
                cactus
              </Text>
            </Link>
          </ChakraLink>

          {/* Desktop Menu Items */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            <ChakraLink href="https://www.instagram.com/thecactus.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" color="brand.green" _hover={{ opacity: 0.7 }}>
              <FaInstagram size={24} />
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#how-it-works">how it works</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#pricing">pricing</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#faq">faq</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.highlight" textTransform="uppercase" _hover={{ color: 'brand.green' }}>
              <Link href="/hall-of-fame">hall of fame</Link>
            </ChakraLink>
          </HStack>

          {/* Mobile Menu Section */}
          <HStack gap={4} display={{ base: 'flex', md: 'none' }}>
            <ChakraLink href="https://www.instagram.com/thecactus.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" color="brand.green" _hover={{ opacity: 0.7 }}>
              <FaInstagram size={24} />
            </ChakraLink>
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              aria-label="Toggle menu"
              fontSize="24px"
              color="brand.green"
              _hover={{ bg: 'brand.lightGrey' }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </IconButton>
          </HStack>
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
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>how it works</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>pricing</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.green" textTransform="uppercase" _hover={{ color: 'brand.darkGreen' }}>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>faq</Link>
            </ChakraLink>
            <ChakraLink asChild fontSize="md" fontWeight="600" color="brand.highlight" textTransform="uppercase" _hover={{ color: 'brand.green' }}>
              <Link href="/hall-of-fame" onClick={() => setMobileMenuOpen(false)}>hall of fame</Link>
            </ChakraLink>
          </VStack>
        )}
      </Container>
    </Box>
  )
}
