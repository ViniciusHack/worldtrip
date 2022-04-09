import { Box, Center, Heading } from "@chakra-ui/react";
import { BannerHome } from "../components/BannerHome";
import { Feature } from "../components/Features";
import { Header } from "../components/Header";
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <Feature />
      <Center p="12px 0 80px 0">
        <Box width="90px" bg="#000" h="2px"/>
      </Center>
        <Box textAlign="center" pb="52px">
          <Heading fontWeight={500} color="gray.900" lineHeight="54px">Vamos nessa?<br />Então escolha seu continente</Heading>
        </Box>
        <Slider />
    </>
  )
}
