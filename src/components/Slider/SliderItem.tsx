import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
// import Europa from '../../../public/images/europa-1.svg';

interface SliderItemProps {
  bgImage: string;
  title: string;
  feature: string;
  slug: string;
}

export function SliderItem({ bgImage, title, feature, slug}: SliderItemProps) {
  return (
      <Center color="gray.0" h={["250", "450"]} bgImage={bgImage} bgPos="center" bgRepeat="no-repeat" bgSize="cover">
        <Stack textAlign="center" spacing="4">
          <Link href={`/${slug}`} passHref>
            <Heading fontSize={["24px", "48px"]} cursor="pointer" transitionDuration="0.3s" _hover={{ color: "yellow.800" }}>{title}</Heading>
          </Link>
            <Text fontWeight={700} color="gray.300" fontSize={["md", "24px"]}>{feature}</Text>
        </Stack>
      </Center>
  )
}