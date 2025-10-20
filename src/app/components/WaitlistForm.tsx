'use client'

import { useState } from 'react'
import { Box, Input, Button, HStack, Text } from '@chakra-ui/react'
import { supabase } from '@/lib/supabase'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [alreadyOnWaitlist, setAlreadyOnWaitlist] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setAlreadyOnWaitlist(false)

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
      // First, check if the email is already in the waitlist
      const { data: existingUser, error: checkError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email.trim())
        .maybeSingle()

      if (checkError) {
        console.error('Error checking waitlist:', checkError)
        throw new Error('Failed to check waitlist status')
      }

      // If user already exists, show a friendly message
      if (existingUser) {
        setAlreadyOnWaitlist(true)
        setSuccess(true)
        setEmail('')
        return
      }

      // If user doesn't exist, add them to the waitlist and send email
      const { data, error: functionError } = await supabase.functions.invoke('send-waitlist-email', {
        body: { email: email.trim() }
      })

      if (functionError) {
        throw functionError
      }

      if (data?.error) {
        throw new Error(data.error)
      }

      setSuccess(true)
      setEmail('')
    } catch (err: unknown) {
      setError('something went wrong. please try again.')
      console.error('Error adding to waitlist:', err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Box textAlign="center" py={4}>
        <Text fontSize="lg" color="brand.green" fontWeight="600">
          {alreadyOnWaitlist ? "we've already got you :)" : 'welcome to the cactus app :)'}
        </Text>
      </Box>
    )
  }

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="md" mx="auto">
      <HStack gap={2} flexDirection={{ base: 'column', sm: 'row' }}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          size="lg"
          bg="brand.background"
          borderColor="brand.lightGrey"
          color="brand.green"
          _placeholder={{ color: 'brand.green', opacity: 0.6 }}
          _hover={{ borderColor: 'brand.green' }}
          _focus={{ borderColor: 'brand.green', boxShadow: 'none' }}
          disabled={loading}
          w={{ base: 'full', sm: 'auto' }}
          flex={{ base: 'none', sm: '1' }}
        />
        <Button
          type="submit"
          size="lg"
          bg="brand.green"
          color="brand.background"
          px={8}
          fontWeight="800"
          _hover={{ bg: 'brand.darkGreen' }}
          disabled={loading}
          w={{ base: 'full', sm: 'auto' }}
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
