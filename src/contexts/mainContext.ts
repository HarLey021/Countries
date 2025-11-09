import { createContext } from "react";

export const MainContext = createContext<MainContextType>({
  countries: [],
  setCountries: () => {},
  region: "",
  setRegion: () => {},
});
