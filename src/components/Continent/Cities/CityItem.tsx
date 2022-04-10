import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { City } from "../../../types";

export function CityItem({ cityImage, country, countryFlagImage, name }: City) {
  return (
    <Box borderRadius={4} border="1px solid" borderColor="yellow.400">
      <Image src={cityImage} alt="Londres" h="173"/>
      <Flex p="18px 24px 25px" align="center">
        <Box w="100%">
          <Heading fontSize={20} pb="3" color="gray.900">{name}</Heading>
          <Text fontSize={16}>{country}</Text>
        </Box>
        <Image src={countryFlagImage} alt={`${country} Bandeira`}/>
      </Flex>
    </Box>
  )
}