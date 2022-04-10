import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Banner } from "../components/Continent/Banner";
import { Cities } from "../components/Continent/Cities";
import { Description } from "../components/Continent/Description";
import { Header } from "../components/Header";
import { api } from '../services/api';
import { Continent } from "../types";

interface DetailsProps {
  continent: Continent;
}

export default function Details({ continent }: DetailsProps) {
  return (
    <>
      <Header arrow/>
      <Banner {...continent}/>
      <Box    
        maxW="1160px" 
        margin="0 auto"
        w="100%"
      >
      <Description {...continent}/>
      <Cities cities={continent.citiesOver100}/>
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
  const { data } = await api.get(`/${continent}`)

  return {
    props: {
      continent: data.continent
    }
  }
}