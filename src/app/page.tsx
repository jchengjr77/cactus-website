'use client'

import { useState } from 'react'
import { Box, Container, Flex, Heading, VStack, Image, Text, Link as ChakraLink, IconButton } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { WaitlistForm } from './components/WaitlistForm'
import { DecorativeLayout } from './components/DecorativeLayout'
import Link from 'next/link'

export default function Home() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  const screenshots = [
    { src: '/screenshots/home.PNG', alt: 'Cactus app home screen' },
    { src: '/screenshots/groups.PNG', alt: 'Cactus app groups screen' },
    { src: '/screenshots/new_update.PNG', alt: 'Cactus app new update screen' }
  ]

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(question)) {
        newSet.delete(question)
      } else {
        newSet.add(question)
      }
      return newSet
    })
  }

  return (
    <Box>
      <Navbar />
      <DecorativeLayout>
        {/* Mobile Art - Top of Hero */}
        <Flex display={{ base: "flex", lg: "none" }} justify="space-around" align="flex-start" py={4} px={4}>
          <Box overflow="visible" mt={5}>
            <Image src="/art/round-cactus.png" alt="Cactus" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-8deg)' }} />
          </Box>
          <Box overflow="visible" mt={-2}>
            <Image src="/art/sunglasses.png" alt="Sunglasses" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(12deg)' }} />
          </Box>
          <Box overflow="visible" mt={6}>
            <Image src="/art/coffee.png" alt="Coffee" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-5deg)' }} />
          </Box>
        </Flex>

        {/* Hero Section */}
        <Box bg="brand.background" py={{ base: 32, md: 0 }} minH={{ base: "auto", md: "calc(100vh - 100px)" }} display={{ base: "block", md: "flex" }} alignItems={{ base: "flex-start", md: "center" }} position="relative">
          <Container maxW="container.md" px={{ base: 4, md: 6 }} w="full" mx="auto">
            <VStack gap={{ base: 12, md: 24 }} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: "5xl", sm: "6xl", md: "8xl", lg: "9xl" }}
                fontWeight="800"
                color="brand.green"
                px={{ base: 4, md: 0 }}
                lineHeight={{ base: "1.2", md: "1.1" }}
                display={{ base: "flex", md: "block" }}
                flexDirection={{ base: "column", md: "row" }}
                style={{ fontWeight: 800 }}
              >
                <Box as="span" display={{ base: "block", md: "inline" }}>water your</Box>
                {' '}
                <Box as="span" display={{ base: "block", md: "inline" }}>friendships</Box>
              </Heading>
              <Box w="full" px={{ base: 4, md: 0 }}>
                <WaitlistForm />
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Mobile Art - After Hero */}
        <Flex display={{ base: "flex", lg: "none" }} justify="space-around" align="flex-start" py={4} px={4} borderTop="1px" borderColor="brand.lightGrey">
          <Box overflow="visible" mt={-3}>
            <Image src="/art/square-cactus.png" alt="Square cactus" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(7deg)' }} />
          </Box>
          <Box overflow="visible" mt={6}>
            <Image src="/art/eyes.png" alt="Eyes" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-12deg)' }} />
          </Box>
          <Box overflow="visible" mt={1}>
            <Image src="/art/boba.png" alt="Boba" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(9deg)' }} />
          </Box>
        </Flex>

        {/* How It Works Section */}
        <Box id="how-it-works" bg="brand.background" py={{ base: 16, md: 40 }} borderTop="1px" borderColor="brand.lightGrey" minH={{ base: "auto", md: "100vh" }} display={{ base: "block", md: "flex" }} alignItems={{ base: "flex-start", md: "center" }} position="relative">
          <Container maxW="container.lg" px={{ base: 4, md: 6 }} w="full" mx="auto">
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

              {/* Content: Screenshots and Descriptions */}
              <VStack gap={{ base: 8, md: 12 }} w="full">
                <VStack gap={6} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} w="full" display={{ base: "flex", md: "none" }}>
                  <Box fontSize={{ base: "lg", md: "lg" }} color="brand.green" lineHeight="1.8" fontWeight={400}>
                    staying connected to friends & family should be easy.
                  </Box>
                </VStack>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  gap={{ base: 8, md: 16 }}
                  align="center"
                  justify="center"
                  w="full"
                >
                  {/* Carousel */}
                  <Box position="relative" w={{ base: "200px", md: "320px" }} flexShrink={0}>
                    <Image
                      src={screenshots[currentScreenshot].src}
                      alt={screenshots[currentScreenshot].alt}
                      width={{ base: 200, md: 320 }}
                      height="auto"
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="brand.green"
                    />

                    {/* Navigation Arrows */}
                    <IconButton
                      position="absolute"
                      left={-4}
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={prevScreenshot}
                      variant="solid"
                      bg="brand.green"
                      color="brand.background"
                      size="sm"
                      borderRadius="full"
                      aria-label="Previous screenshot"
                      _hover={{ bg: 'brand.darkGreen' }}
                    >
                      ‹
                    </IconButton>

                    <IconButton
                      position="absolute"
                      right={-4}
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={nextScreenshot}
                      variant="solid"
                      bg="brand.green"
                      color="brand.background"
                      size="sm"
                      borderRadius="full"
                      aria-label="Next screenshot"
                      _hover={{ bg: 'brand.darkGreen' }}
                    >
                      ›
                    </IconButton>

                    {/* Dots Indicator */}
                    <Flex gap={2} justify="center" mt={4}>
                      {screenshots.map((_, index) => (
                        <Box
                          key={index}
                          w={2}
                          h={2}
                          borderRadius="full"
                          bg={currentScreenshot === index ? 'brand.green' : 'brand.lightGrey'}
                          cursor="pointer"
                          onClick={() => setCurrentScreenshot(index)}
                          transition="background 0.3s"
                        />
                      ))}
                    </Flex>
                  </Box>

                  <VStack gap={6} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} maxW={{ base: "full", md: "lg" }}>
                    <Box fontSize={{ base: "lg", md: "xl" }} color="brand.green" lineHeight="1.8" fontWeight={400} display={{ base: "none", md: "block" }}>
                      staying connected to friends & family should be easy.
                    </Box>
                    <Box fontSize={{ base: "lg", md: "xl" }} color="brand.green" lineHeight="1.8" fontWeight={500}>
                      🌵 add people to groups <br />
                      📝 share updates on a schedule <br />
                      🔥 earn rewards through consistency<br />
                    </Box>
                    <ChakraLink asChild fontSize="sm" fontWeight="400" color="brand.green" _hover={{ color: 'brand.vibrantGreen' }}>
                      <Link href="#earn-points">learn more</Link>
                    </ChakraLink>
                  </VStack>
                </Flex>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Mobile Art - After How It Works */}
        <Flex display={{ base: "flex", lg: "none" }} justify="space-around" align="flex-start" py={4} px={4} borderTop="1px" borderColor="brand.lightGrey">
          <Box overflow="visible" mt={5}>
            <Image src="/art/burger.png" alt="Burger" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-6deg)' }} />
          </Box>
          <Box overflow="visible" mt={-2}>
            <Image src="/art/flower-1.png" alt="Flower" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-10deg)' }} />
          </Box>
          <Box overflow="visible" mt={4}>
            <Image src="/art/baseball.png" alt="Baseball" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(15deg)' }} />
          </Box>
        </Flex>

        {/* FAQ Section */}
        <Box id="faq" bg="brand.background" py={{ base: 16, md: 24 }} borderTop="1px" borderColor="brand.lightGrey" position="relative">
          <Container maxW={{ base: "full", md: "1000px" }} px={{ base: 4, md: 6 }} mx="auto">
            <VStack gap={{ base: 12, md: 16 }} align="stretch">
              <Heading
                as="h2"
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="700"
                color="brand.green"
                textAlign="center"
              >
                faq
              </Heading>

              {/* FAQ Items */}
              <VStack gap={4} align="stretch">
                {/* What is Cactus? */}
                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('what-is-cactus')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    what is cactus?
                    <Box fontSize="lg">{openQuestions.has('what-is-cactus') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('what-is-cactus') && (
                    <Box mt={4}>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        Cactus is a social app that helps groups of friends stay connected.
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" mt={2}>
                        Create a group, invite your friends, set an update cadence, and earn points simply by interacting with your group.
                      </Text>
                    </Box>
                  )}
                </Box>

                {/* Who is this for? */}
                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('who-is-this-for')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    who is this for?
                    <Box fontSize="lg">{openQuestions.has('who-is-this-for') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('who-is-this-for') && (
                    <Box mt={4}>
                      <VStack align="flex-start" gap={1}>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• long distance friendships and families</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• forgetful people</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• bad texters</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the gc</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the exclusive four-person gc</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the ultra-exclusive three-person gc that that one person isn&apos;t in</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• coffee lovers</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• beli fanatics</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• dog owners</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• meme aficionados</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the chill coworkers from your start class</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• gym buddies</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the pilates and matcha crew</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• letterboxd demons</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the ppl that wait 5hrs on the west side highway for a tennis court</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the school group project</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• your jiujitsu open-mat enemies</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the d&d party that always reschedules</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Nathan Ang</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• etc.</Text>
                      </VStack>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" mt={4} fontWeight="400">
                        If there are humans you care about, this is for you.
                      </Text>
                    </Box>
                  )}
                </Box>

                {/* How do I earn points? */}
                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4} id="earn-points">
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('earn-points')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    how do i earn points?
                    <Box fontSize="lg">{openQuestions.has('earn-points') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('earn-points') && (
                    <Box mt={4}>
                      <Text fontSize={{ base: "sm", md: "md" }} color="brand.green" lineHeight="1.8" opacity={0.6}>
                        (The purpose of the app is to connect friends, not earn points... but if you really must know...) <br />
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        Each <strong>group</strong> will have a <strong>points total</strong>, which will grow over time.<br /><br />Here are some things that earn you points:
                      </Text>
                      <VStack align="flex-start" gap={1}>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Each individual&apos;s update</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• A <b>Complete Update</b> (i.e. when all group members post their update on time)</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Comments</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Reactions</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Photos/videos</Text>
                        <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Special limited-time events (tba)</Text>
                      </VStack>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        <br/>Multiple <b>Complete Updates</b> in a row will start to build a <b>streak multiplier</b>, earning you more points. <br />Breaking the streak will reset the multiplier, so make sure your group members <b>update on time</b>.
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" mt={2}>
                        <br />As your group earns more points, you unlock <b>rewards</b>.
                      </Text>
                    </Box>
                  )}
                </Box>

                {/* What rewards do I get? */}
                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('rewards')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    what rewards do i get?
                    <Box fontSize="lg">{openQuestions.has('rewards') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('rewards') && (
                    <Box mt={4}>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        Cactus groups earn <b>rewards</b> as their point total meets certain thresholds. For example, at 100 points the group gets a new emoji pack for reactions.<br /><br />

                        Rewards include:<br/>
                        Custom merch drops for your group (tote bags, hats, etc)<br />
                        Hall of Fame status<br />
                        Custom art and illustrations<br />
                        Event funding (e.g. dinner on us)<br />
                        Reaction emoji packs<br/>
                        App color themes and fonts<br/>
                        Display badges for achievements<br/>
                        Group-specific cactus wrapped<br />
                        and much more :)
                      </Text>
                    </Box>
                  )}
                </Box>

                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('subscription_tiers')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    cactus green vs gold?
                    <Box fontSize="lg">{openQuestions.has('subscription_tiers') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('subscription_tiers') && (
                    <Box mt={4}>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        There are two types of accounts in the cactus app: <b>cactus green</b> and <b>cactus gold</b>.<br/>
                        Cactus green offers the core cactus experience <b>for free</b>, and is available to everybody. <br/>
                        Cactus gold grants access to exclusive rewards such as:<br/>
                        - custom <b>group merch</b> (e.g. trucker hats, tote bags, mugs, etc)<br/>
                        - limited time <b>promotions</b> (e.g. group dinner paid for by the cactus app)<br/>
                        - hand-drawn <b>illustrations</b> (drawn by resident artist @jjchengart)<br/>
                        - and hall of fame eligibility!<br/><br/>

                        The cactus experience is designed for cactus green users; you may use cactus indefinitely for free.<br/>
                      </Text>
                        <Text fontSize={{ base: "sm", md: "md" }} color="brand.darkGold" lineHeight="1.8" opacity={0.8}>(however, if those juicy merch drops are speaking to you... you know what to do)</Text>
                    </Box>
                  )}
                </Box>

                {/* Why is it called Cactus? */}
                <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.green"
                    cursor="pointer"
                    onClick={() => toggleQuestion('why-cactus')}
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    why is it called cactus?
                    <Box fontSize="lg">{openQuestions.has('why-cactus') ? '−' : '+'}</Box>
                  </Heading>
                  {openQuestions.has('why-cactus') && (
                    <Box mt={4}>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">
                        Cacti are able to go long stretches without water. They are sturdy, resilient to the elements, and long lasting. You can count on them living on year after year.
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" mt={2}>
                        However, cacti will <em>eventually</em> die without water. Every so often, they need attention. Cacti are low-maintenance, not no-maintenance.<br /> <br />(you probably see the parallels here...)
                      </Text>
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" mt={2}>
                        <br />More importantly, they&apos;re bulbous and cutely shaped.
                      </Text>
                    </Box>
                  )}
                </Box>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Mobile Art - After FAQ */}
        <Flex display={{ base: "flex", lg: "none" }} justify="center" align="flex-start" gap={5} py={4} px={4} borderTop="1px" borderColor="brand.lightGrey">
          <Box overflow="visible" mt={4}>
            <Image src="/art/ace-of-hearts.png" alt="Ace of hearts" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(14deg)' }} />
          </Box>
          <Box overflow="visible" mt={-3}>
            <Image src="/art/cat-1.png" alt="Cat" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-8deg)' }} />
          </Box>
        </Flex>

        {/* Pricing Section */}
        <Box id="pricing" bg="brand.background" py={{ base: 16, md: 24 }} borderTop="1px" borderColor="brand.lightGrey" position="relative">
          <Container maxW="container.md" px={{ base: 4, md: 6 }} mx="auto">
            <VStack gap={{ base: 8, md: 10 }} align="stretch">
              <Heading
                as="h2"
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="700"
                color="brand.green"
                textAlign="center"
              >
                pricing
              </Heading>

              <Box textAlign="center">
                <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8" opacity={0.8}>
                  we think you should start with green; you may upgrade to gold anytime
                </Text>
              </Box>

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
                        as="h3"
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
                        as="h3"
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

        {/* Mobile Art - After Pricing */}
        <Flex display={{ base: "flex", lg: "none" }} justify="center" align="flex-start" gap={5} py={4} px={4} borderTop="1px" borderColor="brand.lightGrey">
          <Box overflow="visible" mt={-2}>
            <Image src="/art/round-cactus.png" alt="Round cactus" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(8deg)' }} />
          </Box>
          <Box overflow="visible" mt={5}>
            <Image src="/art/square-cactus.png" alt="Square cactus" width={45} height={45} style={{ objectFit: 'contain', transform: 'rotate(-8deg)' }} />
          </Box>
        </Flex>

        {/* Bottom Waitlist Section */}
        <Box bg="brand.background" py={{ base: 16, md: 20 }} borderTop="1px" borderColor="brand.lightGrey" position="relative">
          <Container maxW="container.md" px={{ base: 4, md: 6 }} mx="auto">
            <VStack gap={8} textAlign="center">
              <Heading
                as="h2"
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
      </DecorativeLayout>
    </Box>
  )
}
