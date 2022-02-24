import { Box, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { SubHeader } from '../components/SubHeader'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Flex 
        mt="20"
        p="8"
      >
        <Box>
          <Image src="/images/Nightlife.svg" />
        </Box>
        <Spacer />
        <Box>
          <Image src="/images/Beach.svg" />
        </Box>
        <Spacer />
        <Box>
          <Image src="/images/Modern.svg" />
        </Box>
        <Spacer />
        <Box>
          <Image src="/images/Classic.svg" />
        </Box>
        <Spacer />
        <Box>
          <Image src="/images/More.svg" />
        </Box>
      </Flex>
    </>
  )
}

export default Home
