import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Continent } from "../../types";


type DescriptionProps = Pick<Continent, "description" | "statistics" >

export function Description({ description, statistics }: DescriptionProps) {
  return (
    <Flex
      pt={["6", "20"]}
      pb={["8" ,"20"]}
      flexDirection={["column", "row"]}
      color="gray.900"
      align="center"
      gap={["4","70"]} 
    >
      <Text maxW="600px" textAlign="justify" fontSize={[14, 24]}>{description}</Text>
        <Flex gap="42" w="100%">
          <Box textAlign={["left", "center"]}>
            <Text fontSize={["24", "48"]} fontWeight={600} color="yellow.800">{statistics.countries}</Text>
            <Text fontSize={["17", "27"]} fontWeight={[300, 600]}>países</Text>
          </Box>
          <Box textAlign={["left", "center"]}>
            <Text fontSize={["24", "48"]} fontWeight={600} color="yellow.800">{statistics.languages}</Text>
            <Text fontSize={["17", "27"]} fontWeight={[300, 600]}>línguas</Text >
          </Box>
          <Box textAlign={["left", "center"]}>
            <Text fontSize={["24", "48"]} fontWeight={600} color="yellow.800">{statistics.citiesOver100Length}</Text>
            <Flex gap="5px">
              <Text fontSize={["17", "27"]} fontWeight={[300, 600]}>cidades +100</Text>
              <Image color="gray.100" w={["10px", "16px"]} src="/images/info.svg" alt="Infomação?"/>
            </Flex>
          </Box>
        </Flex>
    </Flex>
  )
}