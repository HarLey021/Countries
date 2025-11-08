type MainContextType = {
  countries: CountryType[];
  setCountries: Dispatch<SetStateAction<CountryType[]>>;
};

type CountryType = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
  flags: {
    svg: string;
    alt: string;
  };
  cca3: string;
};

type ProviderProps = {
  children: ReactNode;
};

type CountryProps = {
  country: CountryType;
};
