import Country from "../components/country/Country";
import Filter from "../components/filter/Filter";
import Search from "../components/search/Search";
import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";

const Home: React.FC = () => {
  const { countries } = useContext(MainContext);

  return (
    <div className="w-full min-h-screen bg-light-grey dark:bg-dark-grey">
      <div className="w-full h-screen overflow-scroll [&::-webkit-scrollbar]:hidden px-[16px] pt-[24px] pb-[65px]">
        <Search />
        <Filter />
        <div className="w-full min-h-screen mt-[28px] grid grid-cols-[repeat(auto-fill,264px)] gap-[40px] justify-center">
          {countries.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
