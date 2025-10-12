'use client'

import { useState } from 'react'
import { Box, Input, Button, HStack, Text } from '@chakra-ui/react'
import { supabase } from '@/lib/supabase'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!email.trim()) {
      setError('please enter your email')
      return
    }

    if (!validateEmail(email)) {
      setError('please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }])

      if (supabaseError) {
        throw supabaseError
      }

      setSuccess(true)
      setEmail('')
    } catch (err: any) {
      setError('something went wrong. please try again.')
      console.error('Error adding to waitlist:', err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Box textAlign="center" py={4}>
        <Text fontSize="lg" color="brand.darkGreen" fontWeight="600">
          ✓ welcome to cactus
        </Text>
      </Box>
    )
  }

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="md">
      <HStack gap={2}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          size="lg"
          bg="brand.background"
          borderColor="brand.lightGrey"
          color="brand.black"
          _placeholder={{ color: 'gray.500' }}
          _hover={{ borderColor: 'brand.green' }}
          _focus={{ borderColor: 'brand.green', boxShadow: 'none' }}
          disabled={loading}
        />
        <Button
          type="submit"
          size="lg"
          bg="brand.green"
          color="brand.background"
          px={8}
          _hover={{ bg: 'brand.lightGreen' }}
          disabled={loading}
        >
          {loading ? 'joining...' : 'join waitlist'}
        </Button>
      </HStack>
      {error && (
        <Text fontSize="sm" color="red.500" mt={2}>
          {error}
        </Text>
      )}
    </Box>
  )
}
