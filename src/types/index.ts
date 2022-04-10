export interface City {
  name: string
  country: string,
  countryFlagImage: string,
  cityImage: string,
}

export interface Continent {
  slug: string;
  title: string;
  description: string;
  feature: string;
  bgImage: string;
  statistics: {
    countries: number;
    languages: number;
    citiesOver100Length: number;
  },
  citiesOver100: City[]
}