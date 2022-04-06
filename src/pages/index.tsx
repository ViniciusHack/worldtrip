import { Box, Center, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Feature } from "../components/Features";

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <Center height='50px'>
        <Box width="90px" bg="#000" h="2px"/>
      </Center>
        <Box textAlign="center">
          <Heading>Vamos nessa?<br />Então escolha seu continente</Heading>
        </Box>
    </>
  )
}
