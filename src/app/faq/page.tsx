'use client'

import { useState } from 'react'
import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

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
      <Box bg="brand.background" py={{ base: 16, md: 24 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <VStack gap={{ base: 12, md: 16 }} align="stretch">
            <Heading
              as="h1"
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
                  as="h2"
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
                  as="h2"
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
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• the ultra-exclusive three-person gc that that one person isn't in</Text>
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
                  as="h2"
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
                      <Text fontSize={{ base: "md", md: "lg" }} color="brand.green" lineHeight="1.8">• Each individual's update</Text>
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
                  as="h2"
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
                      Cactus groups earn <b>rewards</b> as their point total meets certain thresholds. For example, at 100 points the group gets a new emoji pack for reactions.
                    </Text>
                  </Box>
                )}
              </Box>

              <Box borderBottom="1px" borderColor="brand.lightGrey" pb={4}>
                <Heading
                  as="h2"
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
                  as="h2"
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
                      <br />More importantly, they're bulbous and cutely shaped.
                    </Text>
                  </Box>
                )}
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
