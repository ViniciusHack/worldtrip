import { Box, Center, Heading, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BannerHome } from "../components/BannerHome";
import { Feature } from "../components/Features";
import { Header } from "../components/Header";
import { Slider } from '../components/Slider';
import { api } from "../services/api";
import { Continent } from "../types";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  })
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function getAllContinents() {
      const { data } = await api.get("/continents")
      return setContinents(data.continents)
    }
    getAllContinents();
  }, [])

  return (
    <>
      <Header />
      <BannerHome showAirPlane={isWideVersion}/>
      <Feature showIcons={isWideVersion}/>
      <Center p={["0 0 24px", "10px 0 50px"]}>
        <Box w={["60px", "90px"]} bgColor="gray.900" h={["1px", "2px"]}/>
      </Center>
        <Box textAlign="center" pb={["20px", "52px"]}>
          <Heading fontWeight={500} color="gray.900" lineHeight={["30px", "54px"]} fontSize={["xl", "3xl"]}>Vamos nessa?<br />Então escolha seu continente</Heading>
        </Box>
        <Slider continents={continents}/>
    </>
  )
}
