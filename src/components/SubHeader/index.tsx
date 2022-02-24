import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

export function SubHeader() {
    return(
        <>
            <Flex
            backgroundImage="url('/images/Background.png')"
            p="8"
            h="330px"
        >
            <Box p="12">
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
            p="12"
            >
            <Image src="../images/Airplane.png"/>
            </Box>
        </Flex>
      </>
    );
}