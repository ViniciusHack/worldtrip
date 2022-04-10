import { Box, Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BannerHome } from "../components/BannerHome";
import { Feature } from "../components/Features";
import { Header } from "../components/Header";
import { Slider } from '../components/Slider';
import { api } from "../services/api";
import { Continent } from "../types";

export default function Home() {

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
      <BannerHome />
      <Feature />
      <Center p="12px 0 80px 0">
        <Box width="90px" bg="#000" h="2px"/>
      </Center>
        <Box textAlign="center" pb="52px">
          <Heading fontWeight={500} color="gray.900" lineHeight="54px">Vamos nessa?<br />Então escolha seu continente</Heading>
        </Box>
        <Slider continents={continents}/>
    </>
  )
}
