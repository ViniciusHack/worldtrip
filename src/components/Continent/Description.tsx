import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Continent } from "../../types";


type DescriptionProps = Pick<Continent, "description" | "statistics" >

export function Description({ description, statistics }: DescriptionProps) {
  return (
    <Flex
      py="20"
      color="gray.900"
      align="center"
      gap="70" 
    >
      <Text w="600px" textAlign="justify" fontSize={24}>{description}</Text>
      <Box>
        <Flex gap="42">
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">{statistics.countries}</Text>
            <Text fontSize="27" fontWeight={600}>países</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">{statistics.languages}</Text>
            <Text fontSize="27" fontWeight={600}>línguas</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48" fontWeight={600} color="yellow.800">{statistics.citiesOver100Length}</Text>
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