import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Flex
        backgroundImage="url('/images/Background.png')"
        p="8"
      >
        <Box>
          <Text
            fontSize="4xl"
            color="#FFF"
          >5 Continentes, <br/> infinitas possibilidades.</Text>
          <Text
            color="gray.200"
          >Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. </Text>
        </Box>
        <Spacer />
        <Box 
          boxSize={250}
          mt={100}
        >
          <Image src="../images/Airplane.png"/>
        </Box>
      </Flex>
    </>
  )
}

export default Home
