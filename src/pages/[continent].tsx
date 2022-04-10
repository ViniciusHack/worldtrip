import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Banner } from "../components/Continent/Banner";
import { Cities } from "../components/Continent/Cities";
import { Description } from "../components/Continent/Description";
import { Header } from "../components/Header";
import { api } from '../services/api';

interface Continent {
  name: string;
  description: string;
  statistics: {
    countries: number;
    languages: number;
    citiesOver100: number;
  }
}

interface Details {
  continent: Continent;
}

export default function Details({ continent }: Details) {
  return (
    <>
    {console.log(continent)}
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
      paths: [], // [{params: { slug: "???" }}]
      fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { continent } = params
  const { data: continentInfo } = await api.get(`/${continent}`)

  console.log(continentInfo)

  return {
    props: {
      continent: continentInfo
    }
  }
}