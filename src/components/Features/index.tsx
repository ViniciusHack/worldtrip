import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Item } from "./Item";

interface FeatureProps {
  showIcons: boolean;
}

export function Feature({ showIcons }: FeatureProps) {

  return (
    <>
      {!showIcons ? 
      <Flex rowGap={27} color="gray.900" p={["36px 50px", "114px 70px"]} flexWrap="wrap">
        <Item text="vida noturna" imgSrc="/images/cocktail-1.svg"/>
        <Item flexPosition="end" text="praia" imgSrc="/images/surf-1.svg"/>
        <Item text="moderno" imgSrc="/images/building-1.svg"/>
        <Item flexPosition="end" text="clássico" imgSrc="/images/museum-1.svg" />
        <Item flexPosition="center" text="e mais..." imgSrc="/images/earth-1.svg" />
      </Flex>
      :
      <SimpleGrid rowGap={27} color="gray.900" p={["36px 50px", "114px 70px"]} minChildWidth="150px">
        <GridItem><Item text="vida noturna" showIcon imgSrc="/images/cocktail-1.svg"/></GridItem>
        <GridItem><Item text="praia" showIcon imgSrc="/images/surf-1.svg"/></GridItem>
        <GridItem><Item text="moderno" showIcon imgSrc="/images/building-1.svg"/></GridItem>
        <GridItem><Item text="clássico" showIcon imgSrc="/images/museum-1.svg" /></GridItem>
        <GridItem><Item text="e mais..." showIcon imgSrc="/images/earth-1.svg" /></GridItem>
      </SimpleGrid>
      }
    </>
  )
}