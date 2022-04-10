import { NextApiRequest, NextApiResponse } from "next";

const mockContinents = [
  {
    slug: "europe",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  },
  {
    slug: "north-america",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  },
  {
    slug: "europe",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  },
  {
    slug: "europe",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  },
  {
    slug: "europe",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  },
  {
    slug: "europe",
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ]
  }
]


const continent = ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { continent } = query

  const continentExists = mockContinents.find(continentInfo => continentInfo.slug === continent)

  if(!continentExists) {
    return res.status(400).json({ error: "Continent Não existe!"})
  }
  
  return res.status(200).json({ continent: continentExists})
}

export default continent;