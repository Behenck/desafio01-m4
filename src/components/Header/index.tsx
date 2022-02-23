import { Center } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export function Header() {
    return(
        <Center
            as="header"
            w="100%"
            maxW={1440}
            h="20"
            mx="auto"
            px="6"
        >
            <Image src="/images/Logo.svg" alt="worldtrip" />
        </Center>
    );
}