import { Flex, Image, Stack, Text } from "@chakra-ui/react";


export function Feature() {

  return (
    <Flex p="114px 140px" justifyContent="space-between">
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src="/images/cocktail-1.svg" alt="Suco"/>
        <Text>vida noturna</Text>
      </Stack>
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src="/images/surf-1.svg" alt="Suco"/>
        <Text>praia</Text>
      </Stack>
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src="/images/building-1.svg" alt="Suco"/>
        <Text>moderno</Text>
      </Stack>
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src="/images/museum-1.svg" alt="Suco"/>
        <Text>clássico</Text>
      </Stack>
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src="/images/earth-1.svg" alt="Suco"/>
        <Text>e mais</Text>
      </Stack>
    </Flex>
  )
}