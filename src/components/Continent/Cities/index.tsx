import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { CityItem } from "./CityItem";



export function Cities() {
  return (
    <>
      <Heading fontWeight={500} color="gray.900">Cidades +100</Heading>
      <SimpleGrid gap="45px" rowGap="48px" minChildWidth={256} p="40px 0 35px">
        <GridItem>
          <CityItem />
        </GridItem>
        <GridItem>
          <CityItem />
        </GridItem>
        <GridItem>
          <CityItem />
        </GridItem>
        <GridItem>
          <CityItem />
        </GridItem>
        <GridItem>
          <CityItem />
        </GridItem>
      </SimpleGrid>
    </>
  )
}