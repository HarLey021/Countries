import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext } from "../contexts/mainContext";

const CountryInfo: React.FC = () => {
  const navigate = useNavigate();
  const { countries } = useContext<MainContextType>(MainContext);
  const { name } = useParams<{ name: string }>();
  const countryName = name ? decodeURIComponent(name) : "";
  const thisCountry = countries.find(
    (country) => country.name.common == countryName
  );

  const borderNames = thisCountry?.borders?.map((code) => {
    const borderCountry = countries.find((c) => c.cca3 === code);
    return borderCountry?.name.common;
  });

  return (
    <>
      <div className="w-full min-h-screen bg-light-grey dark:bg-dark-grey pt-[40px] px-[28px] pb-[60px]">
        <button
          onClick={() => navigate("/")}
          className="w-[104px] h-[32px] bg-white dark:bg-normal-grey text-[14px] text-black dark:text-[white] font-ultraLight pl-[50px] relative flex items-center mb-[64px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="absolute top-[7px] left-[24px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
              fill="#111517"
              className="dark:fill-white"
            />
          </svg>
          Back
        </button>
        <div className="w-full flex justify-center mb-[50px]">
          <img
            className="rounded-[5px] "
            src={thisCountry?.flags.svg}
            alt={thisCountry?.flags.alt}
          />
        </div>
        <h1 className="text-[22px] text-black dark:text-white font-bold mb-[16px]">
          {thisCountry?.name.common}
        </h1>

        <div className="h-[160px] mb-[32px]">
          <ul className="h-full w-auto text-[14px] text-black dark:text-white font-normal flex flex-col justify-between">
            <li>
              Native Name:{" "}
              <span className="font-ultraLight">
                {Object.values(thisCountry?.name.nativeName || {})[0]?.common}
              </span>
            </li>
            <li>
              Population:{" "}
              <span className="font-ultraLight">
                {thisCountry?.population.toLocaleString()}
              </span>
            </li>
            <li>
              Region:{" "}
              <span className="font-ultraLight">{thisCountry?.region}</span>
            </li>
            <li>
              Sub Region:{" "}
              <span className="font-ultraLight">{thisCountry?.subregion}</span>
            </li>
            <li>
              Capital:{" "}
              <span className="font-ultraLight">{thisCountry?.capital}</span>
            </li>
          </ul>
        </div>

        <div className="h-[96px] mb-[32px]">
          <ul className="h-full text-[14px] text-black dark:text-white font-normal flex flex-col justify-between">
            <li>
              Top Level Domain:{" "}
              <span className="font-ultraLight">{thisCountry?.tld}</span>
            </li>
            <li>
              Currencies:{" "}
              <span className="font-ultraLight">
                {Object.values(thisCountry?.currencies || {})[0]?.name}
              </span>
            </li>
            <li>
              Languages:{" "}
              <span className="font-ultraLight">
                {Object.values(thisCountry?.languages || {})[0]}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] text-black dark:text-white font-normal mb-[16px]">
            Border Countries:
          </h3>

          <div className="flex flex-wrap gap-[10px]">
            {borderNames?.map((name) => (
              <button
                onClick={() => name && navigate(`/${encodeURIComponent(name)}`)}
                key={name}
                className="px-[20px] h-[28px] rounded-[2px] text-black dark:text-white bg-white dark:bg-normal-grey shadow-[0_2px_9px_0_rgba(0,0,0,0.05)]"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
