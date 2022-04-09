import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";


export function BannerHome() {
  return (
    <Box bgImage="/images/banner-bg.svg" h="335px">
      <Flex px="140px" justifyContent="space-between" gap="60">
        <Stack spacing="5" pt="20">
          <Heading lineHeight="54px" color="gray.100" fontWeight={500}>5 Continentes,<br />infinitas possibilidades</Heading>
          <Text color="gray.300" fontSize="20" fontWeight={400}>Chegou a hora de tirar do papel a viagem que você sempre sonhou</Text>
        </Stack>
        <Image pt="76" src="/images/airplane.svg" alt="Avião amarelo inclinado"/>
      </Flex>
    </Box>
  )
}