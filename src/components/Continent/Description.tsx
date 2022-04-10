import { Box, Flex, Image, Text } from "@chakra-ui/react";



export function Description() {
  return (
    <Flex
      py="20"
      color="gray.900"
      align="center"
      gap="70" 
    >
      <Text w="600px" textAlign="justify" fontSize={24}>A Europa é, por convenção, um dos seis continentes do mundo. 
        Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória
        de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
        e o mar Negro a sudeste</Text>
      <Box>
        <Flex gap="42">
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">50</Text>
            <Text fontSize="27" fontWeight={600}>países</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">60</Text>
            <Text fontSize="27" fontWeight={600}>línguas</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">27</Text>
            <Flex gap="5px">
              <Text fontSize="27" fontWeight={600}>cidades +100</Text>
              <Image src="/images/info.svg" alt="Infomação?"/>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}