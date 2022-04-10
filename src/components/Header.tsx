import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  arrow?: boolean;
}

export function Header({arrow = false}: HeaderProps) {
  return (
      <Flex 
      position="relative" 
      h={["50", "100"]} 
      w="100%" 
      maxW="1160px" 
      margin="0 auto" 
      align="center" 
      justify="center">
        {arrow && <Link href="/" passHref><Image position="absolute" left={0} src="/images/back.svg" alt="Botão de voltar" cursor="pointer"/></Link>}
        <Link href="/" passHref><a><Image h={["5", "100%"]} w={["20.25", "100%"]}src="/images/logo.svg" alt="Logo worldtrip avião entre a palavra worldtrip"/></a></Link>
      </Flex>
  )
}