import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "../../../types";
import { CityItem } from "./CityItem";

interface CitiesProps {
  cities: City[];
}

export function Cities({cities}: CitiesProps) {
  return (
    <>
      <Heading fontWeight={500} fontSize={["2xl", "4xl"]} color="gray.900">Cidades +100</Heading>
      <SimpleGrid gap={"45px"} rowGap={["20px", "48px"]} templateColumns={["256px", "repeat(4, 256px)"]} justifyContent={["center"]} p={["20px 0 16px", "40px 0 35px"]}>
        {cities.map(city => (
          <GridItem key={city.name}>
            <CityItem {...city}/>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  )
}