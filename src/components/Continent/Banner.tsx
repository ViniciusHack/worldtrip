import { Box, Heading } from "@chakra-ui/react";
import { Continent } from "../../types";

type BannerProps = Pick<Continent, "bgImage2" | "title" >

export function Banner({bgImage2, title}: BannerProps) {
  return (
    <Box bgImage={bgImage2} h="500px" display="flex" alignItems="flex-end" bgSize="cover">
      <Box
      w="100%" 
      maxW="1160px" 
      margin="0 auto"
      pb="59"
      >
        <Heading fontSize="48px" color="gray.0">{title}</Heading>
      </Box>
    </Box>
  )
}