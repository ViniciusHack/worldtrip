import { Center, Heading, Stack, Text } from "@chakra-ui/react";
// import Europa from '../../../public/images/europa-1.svg';


export function SliderItem() {
  return (
    <Center color="gray.0" h="450" bgImage="/images/europa-1.svg" bgRepeat="no-repeat" bgSize="cover">
      <Stack textAlign="center" spacing="4">
        <Heading fontSize="48px">Europa</Heading>
        <Text fontWeight={700} fontSize="24px">O continente mais antigo.</Text>
      </Stack>
    </Center>
  )
}