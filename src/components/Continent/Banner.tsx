import { Box, Heading } from "@chakra-ui/react";


export function Banner() {
  return (
    <Box bgImage="/images/europa-2.svg" h="500px" display="flex" alignItems="flex-end" bgSize="cover">
      <Box
      w="100%" 
      maxW="1160px" 
      margin="0 auto"
      pb="59"
      >
        <Heading fontSize="48px" color="gray.0">Europa</Heading>
      </Box>
    </Box>
  )
}