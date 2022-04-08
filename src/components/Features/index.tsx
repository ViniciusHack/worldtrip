import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Item } from "./Item";


export function Feature() {

  return (
    <SimpleGrid p="114px 70px" minChildWidth="150px">
      <GridItem><Item text="vida noturna" imgSrc="/images/cocktail-1.svg"/></GridItem>
      <GridItem><Item text="praia" imgSrc="/images/surf-1.svg"/></GridItem>
      <GridItem><Item text="moderno" imgSrc="/images/building-1.svg"/></GridItem>
      <GridItem><Item text="clássico" imgSrc="/images/museum-1.svg" /></GridItem>
      <GridItem><Item text="e mais..." imgSrc="/images/earth-1.svg" /></GridItem>
    </SimpleGrid>
  )
}