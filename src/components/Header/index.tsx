import { Flex } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import Logo from "../../../public/Logo.svg";

export function Header() {
    return(
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            <Image src={Logo} alt="worldtrip" />
        </Flex>
    );
}