import { NextApiRequest, NextApiResponse } from "next";
import { Continent } from "../../types";

export const mockContinents: Continent[] = [
  {
    slug: "europe",
    title: "Europa",
    bgImage2: "http://localhost:3000/images/europa-2.svg",
    feature: "O continente mais antigo.",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    bgImage: "http://localhost:3000/images/europa-1.svg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Paris",
        country: "França",
        countryFlagImage: "http://localhost:3000/images/icons/france.svg",
        cityImage: "http://localhost:3000/images/paris.svg",
      },
      {
        name: "Roma",
        country: "Itália",
        countryFlagImage: "http://localhost:3000/images/icons/italy.svg",
        cityImage: "http://localhost:3000/images/roma.svg",
      },
      {
        name: "Praga",
        country: "República Tcheca",
        countryFlagImage: "http://localhost:3000/images/icons/czech.svg",
        cityImage: "http://localhost:3000/images/praga.svg",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        countryFlagImage: "http://localhost:3000/images/icons/netherlands.svg",
        cityImage: "http://localhost:3000/images/amsterdam.svg",
      },
    ],
    statistics: {
      countries: 50,
      languages: 60,
      citiesOver100Length: 27,
    }
  },
  {
    slug: "north-america",
    title: "America do Norte",
    bgImage2: "http://localhost:3000/images/north-2.jpg",
    feature: "O continente mais famoso.",
    description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá.",
    bgImage: "http://localhost:3000/images/north-1.jpg",
    citiesOver100: [
      {
        name: "Cidade de Nova York",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/nova-york.jpg",
      },
      {
        name: "Miami",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/miami.jpg",
      },
      {
        name: "Los Angeles",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/los-angeles.jpg",
      },
      {
        name: "Las Vegas",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/las-vegas.jpg",
      },
      {
        name: "Orlando",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/orlando.jpg",
      },
      {
        name: "Vancouver",
        country: "Canadá",
        countryFlagImage: "http://localhost:3000/images/icons/canada.png",
        cityImage: "http://localhost:3000/images/vancouver.jpg",
      },
      {
        name: "São Francisco",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/fransisco.jpg",
      },
      {
        name: "Honolulu",
        country: "Estados Unidos",
        countryFlagImage: "http://localhost:3000/images/icons/usa.png",
        cityImage: "http://localhost:3000/images/honolulu.jpg",
      },
    ],
    statistics: {
      countries: 4,
      languages: 4,
      citiesOver100Length: 8,
    }
  },
  {
    slug: "south-america",
    title: "America do Sul",
    bgImage2: "http://localhost:3000/images/south-2.jpg",
    feature: "O continente resort.",
    description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake.",
    bgImage: "http://localhost:3000/images/south-1.jpg",
    citiesOver100: [
      {
        name: "Cidade de Buenos Aires",
        country: "Argentina",
        countryFlagImage: "http://localhost:3000/images/icons/argentina.png",
        cityImage: "http://localhost:3000/images/aires.jpg",
      },
      {
        name: "Rio de Janeiro",
        country: "Brasil",
        countryFlagImage: "http://localhost:3000/images/icons/brazil.png",
        cityImage: "http://localhost:3000/images/janeiro.jpg",
      },
    ],
    statistics: {
      countries: 12,
      languages: 4,
      citiesOver100Length: 2
    }
  },
  {
    slug: "asia",
    title: "Ásia",
    bgImage2: "http://localhost:3000/images/asia-2.jpg",
    feature: "O maior continente.",
    description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.",
    bgImage: "http://localhost:3000/images/asia-1.jpg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
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
    bgImage2: "http://localhost:3000/images/africa-2.jpg",
    feature: "O berço do Ser Humano",
    description: "A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005).",
    bgImage: "http://localhost:3000/images/africa-1.jpg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      }
    ],
    statistics: {
      countries: 54,
      languages: 2000,
      citiesOver100Length: 27
    }
  },
  {
    slug: "oceania",
    title: "Oceania",
    bgImage2: "http://localhost:3000/images/oceania-2.jpg",
    feature: "O continente mais novo",
    description: "A Oceania é um continente situado entre os oceanos Índico e Pacífico, a sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. É composto por 14 países e ilhas e territórios pertencentes a outros países, tanto oceânicos quanto de outros continentes.",
    bgImage: "http://localhost:3000/images/oceania-1.jpg",
    citiesOver100: [
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
        cityImage: "http://localhost:3000/images/londres.svg",
      },
      {
        name: "Londres",
        country: "Reino Unido",
        countryFlagImage: "http://localhost:3000/images/icons/uk.svg",
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