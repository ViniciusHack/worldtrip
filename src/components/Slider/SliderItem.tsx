import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
// import Europa from '../../../public/images/europa-1.svg';

interface SliderItemProps {
  bgImage: string;
  title: string;
  description: string;
  slug: string;
}

export function SliderItem({ bgImage, title, description, slug}: SliderItemProps) {
  return (
      <Center color="gray.0" h="450" bgImage={bgImage} bgPos="center" bgRepeat="no-repeat" bgSize="cover">
        <Stack textAlign="center" spacing="4">
          <Link href={`/${slug}`} passHref>
            <Heading fontSize="48px" cursor="pointer" _hover={{ color: "yellow.800" }}>{title}</Heading>
          </Link>
            <Text fontWeight={700} fontSize="24px">{description}</Text>
        </Stack>
      </Center>
  )
}