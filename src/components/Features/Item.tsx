import { Image, Stack, Text } from "@chakra-ui/react";


interface ItemProps {
  text: string;
  imgSrc: string;
}

export function Item({ text, imgSrc }: ItemProps) {
  return (
    <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
        <Image w="85px" src={imgSrc} alt="Suco"/>
        <Text>{text}</Text>
    </Stack>
  )
}