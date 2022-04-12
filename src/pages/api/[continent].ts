import { NextApiRequest, NextApiResponse } from "next";
import { mockContinents } from "./continents";


const continent = ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { continent } = query

  const continentExists = mockContinents.find(continentInfo => continentInfo.slug === continent)

  if(!continentExists) {
    return res.status(400).json({ error: "Continente Não existe!"})
  }
  
  return res.status(200).json({ continent: continentExists})
}

export default continent;