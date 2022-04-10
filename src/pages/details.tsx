import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Continent/Banner";
import { Cities } from "../components/Continent/Cities";
import { Description } from "../components/Continent/Description";
import { Header } from "../components/Header";

export default function Details() {
  return (
    <>
      <Header arrow/>
      <Banner />
      <Box    
        maxW="1160px" 
        margin="0 auto"
        w="100%"
      >
      <Description />
      <Cities />
      </Box>
    </>
  )
}