import Country from "../components/country/Country";
import Filter from "../components/filter/Filter";
import Search from "../components/search/Search";
import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";

const Home: React.FC = () => {
  const { countries, region } = useContext<MainContextType>(MainContext);
  let filteredCountries: CountryType[] = [];
  if (region === "") {
    filteredCountries = countries;
  } else {
    filteredCountries = countries.filter((c) => c.region === region);
  }

  return (
    <div className="w-full min-h-screen bg-light-grey dark:bg-dark-grey lg:px-[80px] lg:pt-[48px] lg:flex lg:justify-center">
      <div className="w-full h-screen overflow-scroll [&::-webkit-scrollbar]:hidden px-[16px] pt-[24px] pb-[65px] lg:p-0 lg:max-w-[1320px] lg:pb-[48px]">
        <div className="lg:w-full lg:h-[60px] lg:flex lg:justify-between lg:items-center">
          <Search />
          <Filter />
        </div>
        <div className="w-full min-h-screen mt-[28px] grid grid-cols-[repeat(auto-fill,264px)] gap-[40px] justify-center lg:gap-[75px]">
          {filteredCountries.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
