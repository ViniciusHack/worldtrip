import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "../../../types";
import { CityItem } from "./CityItem";

interface CitiesProps {
  cities: City[];
}

export function Cities({cities}: CitiesProps) {
  return (
    <>
      <Heading fontWeight={500} color="gray.900">Cidades +100</Heading>
      <SimpleGrid gap="45px" rowGap="48px" minChildWidth={256} p="40px 0 35px">
        {cities.map(city => (
          <GridItem key={city.name}>
            <CityItem {...city}/>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  )
}