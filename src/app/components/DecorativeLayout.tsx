'use client'

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface DecorativeLayoutProps {
  children: ReactNode
}

const leftColumnAssets = [
  { src: '/art/round-cactus.png', alt: 'Round cactus', rotation: -8, offsetX: '20%', marginTop: '2%' },
  { src: '/art/sunglasses.png', alt: 'Sunglasses', rotation: 12, offsetX: '-15%', marginTop: '18%' },
  { src: '/art/coffee.png', alt: 'Coffee', rotation: -5, offsetX: '25%', marginTop: '25%' },
  { src: '/art/baseball.png', alt: 'Baseball', rotation: 15, offsetX: '-10%', marginTop: '8%' },
  { src: '/art/flower-1.png', alt: 'Flower', rotation: -10, offsetX: '15%', marginTop: '30%' },
]

const rightColumnAssets = [
  { src: '/art/square-cactus.png', alt: 'Square cactus', rotation: 7, offsetX: '-20%', marginTop: '15%' },
  { src: '/art/eyes.png', alt: 'Eyes', rotation: -12, offsetX: '15%', marginTop: '5%' },
  { src: '/art/boba.png', alt: 'Boba', rotation: 9, offsetX: '-25%', marginTop: '28%' },
  { src: '/art/burger.png', alt: 'Burger', rotation: -6, offsetX: '10%', marginTop: '3%' },
  { src: '/art/ace-of-hearts.png', alt: 'Ace of hearts', rotation: 14, offsetX: '-15%', marginTop: '22%' },
  { src: '/art/cat-1.png', alt: 'Cat', rotation: -8, offsetX: '20%', marginTop: '12%' },
]

export function DecorativeLayout({ children }: DecorativeLayoutProps) {
  return (
    <Flex w="full" position="relative" justify="space-between" minH="100%">
      {/* Left Column - Hidden on mobile, visible on larger screens */}
      <Box
        w={{ base: 0, lg: "15%" }}
        display={{ base: "none", lg: "flex" }}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        py={8}
        flexShrink={0}
        minH="100%"
      >
        {leftColumnAssets.map((asset, index) => (
          <Box
            key={`left-${index}`}
            transform={`rotate(${asset.rotation}deg) translateX(${asset.offsetX})`}
            transition="transform 0.3s ease"
            _hover={{ transform: `rotate(${asset.rotation}deg) translateX(${asset.offsetX}) scale(1.1)` }}
            w={{ lg: "80px", xl: "100px", "2xl": "120px" }}
            h={{ lg: "80px", xl: "100px", "2xl": "120px" }}
            position="relative"
            flexShrink={0}
            mt={asset.marginTop}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        ))}
      </Box>

      {/* Main Content - Centered with 70% width */}
      <Box
        w={{ base: "100%", lg: "70%" }}
        minW={0}
      >
        {children}
      </Box>

      {/* Right Column - Hidden on mobile, visible on larger screens */}
      <Box
        w={{ base: 0, lg: "15%" }}
        display={{ base: "none", lg: "flex" }}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        py={8}
        flexShrink={0}
        minH="100%"
      >
        {rightColumnAssets.map((asset, index) => (
          <Box
            key={`right-${index}`}
            transform={`rotate(${asset.rotation}deg) translateX(${asset.offsetX})`}
            transition="transform 0.3s ease"
            _hover={{ transform: `rotate(${asset.rotation}deg) translateX(${asset.offsetX}) scale(1.1)` }}
            w={{ lg: "80px", xl: "100px", "2xl": "120px" }}
            h={{ lg: "80px", xl: "100px", "2xl": "120px" }}
            position="relative"
            flexShrink={0}
            mt={asset.marginTop}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
