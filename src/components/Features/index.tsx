import { Flex } from "@chakra-ui/react";
import { Item } from "./item";


export function Feature() {

  return (
    <Flex p="114px 140px" justifyContent="space-between">
      <Item text="vida noturna" imgSrc="/images/cocktail-1.svg"/>
      <Item text="praia" imgSrc="/images/surf-1.svg"/>
      <Item text="moderno" imgSrc="/images/building-1.svg"/>
      <Item text="clássico" imgSrc="/images/museum-1.svg" />
      <Item text="e mais..." imgSrc="/images/earth-1.svg" />
    </Flex>
  )
}