import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";


export function Header() {
  return (
    <Flex w="100vw" h="100" align="center" justify="center">
      <Link href="/" passHref><a><Image src="/images/logo.svg" alt="Logo worldtrip avião entre a palavra worldtrip"/></a></Link>
    </Flex>
  )
}