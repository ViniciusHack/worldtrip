import { Center, Heading, Stack, Text } from "@chakra-ui/react";
// import Europa from '../../../public/images/europa-1.svg';

interface SliderItemProps {
  bgImage: string;
  title: string;
  description: string;
}

export function SliderItem({ bgImage, title, description}: SliderItemProps) {
  return (
    <Center color="gray.0" h="450" bgImage={bgImage} bgPos="center" bgRepeat="no-repeat" bgSize="cover">
      <Stack textAlign="center" spacing="4">
        <Heading fontSize="48px">{title}</Heading>
        <Text fontWeight={700} fontSize="24px">{description}</Text>
      </Stack>
    </Center>
  )
}