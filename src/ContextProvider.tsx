import { useEffect, useState } from "react";
import { MainContext } from "./contexts/mainContext";
import axios from "axios";

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  console.log(countries);

  const fetchData = async () => {
    const [mainRes, extraRes] = await Promise.all([
      axios.get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags"
      ),
      axios.get("https://restcountries.com/v3.1/all?fields=cca3"),
    ]);

    const main = mainRes.data;
    const extra = extraRes.data;

    const merged = main.map((country: CountryType, i: number) => ({
      ...country,
      ...extra[i],
    }));
    setCountries(merged);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainContext.Provider value={{ countries, setCountries }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
