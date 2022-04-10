import { Box, Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";


export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  })

  return (  
    <Box bgImage="/images/banner-bg.svg" h={[163, 335]} bgSize={"cover"}>
      <Flex px={["16px", "50px", "140px"]} justifyContent="space-between" gap={["0", "0", "0", "0", "45", "60"]}>
        <Stack spacing={["2", "5"]} pt={["7", "20"]} pb={["7", ""]}>
          <Heading fontSize={["xl", "3xl"]}lineHeight={["30px","54px"]} color="gray.100" fontWeight={500}>5 Continentes,<br />infinitas possibilidades</Heading>
          <Text color="gray.300" fontSize={["sm","xl"]} fontWeight={400}>Chegou a hora de tirar do papel a viagem que você sempre sonhou</Text>
        </Stack> 
        {isWideVersion && <Image pt="76" src={"/images/airplane.svg"} alt="Avião amarelo inclinado"/>}
      </Flex>
    </Box>
  )
}