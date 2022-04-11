import { Box, Heading } from "@chakra-ui/react";
import { Continent } from "../../types";

type BannerProps = Pick<Continent, "bgImage2" | "title" >

export function Banner({bgImage2, title}: BannerProps) {
  return (
    <Box bgImage={bgImage2}
      h={["150px", "500px"]}
      display="flex"
      alignItems={["center", "flex-end"]}
      textAlign={["center", "initial"]}
      bgSize="cover"
    >
      <Box
        w="100%" 
        maxW="1160px" 
        margin="0 auto"
        pb={["0", "59"]}
      >
        <Heading fontSize={["28px", "48px"]} fontWeight={600} color="gray.0">{title}</Heading>
      </Box>
    </Box>
  )
}