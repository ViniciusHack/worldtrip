import { Circle, Flex, Image, Stack, Text } from "@chakra-ui/react";


interface ItemProps {
  text: string;
  imgSrc: string;
  showIcon?: boolean;
  flexPosition?: string;
}

export function Item({ text, imgSrc, showIcon = false, flexPosition = "start" }: ItemProps) {
  return (
    <Flex flex="1 1 50%" gap="2" align="baseline" justify={[flexPosition, "center"]} >
      {!showIcon && <Circle size="2" bgColor="yellow.800"/>}
      <Stack align="center" fontSize="24px" lineHeight="36px" spacing="6" fontWeight={600}>
          {showIcon && <Image w="85px" src={imgSrc} alt="Suco"/>}
          <Text lineHeight={["27px", "36px"]}fontWeight={["500", "600"]} fontSize={["lg","2xl"]}>{text}</Text>
      </Stack>
    </Flex>
  )
}