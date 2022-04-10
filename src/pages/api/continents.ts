import { NextApiRequest, NextApiResponse } from "next";
import { Continent } from "../../types";

export const mockContinents: Continent[] = [
  {
    slug: "europe",
    title: "Europa",
    feature: "O continente mais antigo.",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  },
  {
    slug: "north-america",
    title: "America do Norte",
    feature: "O continente mais famoso.",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/north-1.jpg",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  },
  {
    slug: "south-america",
    title: "America do Sul",
    feature: "O continente resort.",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/south-1.jpg",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  },
  {
    slug: "asia",
    title: "Ásia",
    feature: "O maior continente.",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/asia-1.jpg",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  },
  {
    slug: "africa",
    title: "África",
    feature: "O berço do Ser Humano",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/africa-1.jpg",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  },
  {
    slug: "oceania",
    title: "Oceania",
    feature: "O continente mais novo",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/oceania-1.jpg",
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
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27
    }
  }
]


const continents = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ continents: mockContinents })
}

export default continents;