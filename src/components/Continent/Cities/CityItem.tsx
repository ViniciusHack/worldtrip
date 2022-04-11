import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { City } from "../../../types";

export function CityItem({ cityImage, country, countryFlagImage, name }: City) {
  return (
    <Box h="100%" >
      <Image borderRadius={"4px 4px 0 0"} src={cityImage} alt={name} h="173"/>
      <Flex 
        p="18px 24px 25px"
        align="center"
        border="1px solid"
        borderRadius={"0 0 4px 4px"}
        borderColor="yellow.400"
        borderTop={0}
      >
        <Box w="100%">
          <Heading fontSize={20} pb="3" color="gray.900" fontWeight={600} >{name}</Heading>
          <Text fontWeight={500} fontSize={16} color="gray.500" >{country}</Text>
        </Box>
        <Image w="30px" h="30px" src={countryFlagImage} alt={`${country} Bandeira`}/>
      </Flex>
    </Box>
  )
}