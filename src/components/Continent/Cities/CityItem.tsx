import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";



export function CityItem() {
  return (
    <Box borderRadius={4} border="1px solid" borderColor="yellow.400">
      <Image src="/images/londres.svg" alt="Londres" h="173"/>
      <Flex p="18px 24px 25px" align="center">
        <Box w="100%">
          <Heading fontSize={20} pb="3" color="gray.900">Londres</Heading>
          <Text fontSize={16}>Reino Unido</Text>
        </Box>
        <Image src="/images/uk.svg" alt="Reino Unido Bandeira"/>
      </Flex>
    </Box>
  )
}