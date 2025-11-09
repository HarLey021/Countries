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
      <div className="w-full min-h-screen bg-light-grey dark:bg-dark-grey lg:p-[80px] lg:flex lg:justify-center">
        <div className=" pt-[40px] px-[28px] pb-[60px] lg:p-0 lg:flex lg:flex-col lg:items-center lg:min-w-[1320px] lg:max-w-[1320px]">
          <button
            onClick={() => navigate("/")}
            className="w-[104px] h-[32px] bg-white dark:bg-normal-grey text-[14px] text-black dark:text-[white] font-ultraLight pl-[50px] relative flex items-center mb-[64px] rounded-[2px] lg:w-[134px] lg:h-[40px] lg:pl-[62px] lg:text-[16px] lg:rounded-[6px] lg:mb-[80px] lg:mr-auto cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="absolute top-[7px] left-[24px] lg:w-[20px] lg:h-[20px] lg:top-[10px] lg:left-[32px]"
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
          <div className="lg:flex lg:w-full lg:justify-between ">
            <div className="w-full flex justify-center mb-[50px] lg:block lg:w-[560px] lg:mb-0">
              <img
                className="rounded-[10px] lg:rounded-[15px]"
                src={thisCountry?.flags.svg}
                alt={thisCountry?.flags.alt}
              />
            </div>

            <div>
              <div className="lg:mb-[70px]">
                <h1 className="text-[22px] text-black dark:text-white font-bold mb-[16px] lg:text-[32px] lg:mb-[23px]">
                  {thisCountry?.name.common}
                </h1>

                <div className="lg:flex lg:gap-[117px]">
                  <div className="h-[160px] mb-[32px] lg:mb-0">
                    <ul className="h-full w-auto text-[14px] text-black dark:text-white font-normal flex flex-col justify-between lg:text-[16px]">
                      <li>
                        Native Name:{" "}
                        <span className="font-ultraLight">
                          {
                            Object.values(thisCountry?.name.nativeName || {})[0]
                              ?.common
                          }
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
                        <span className="font-ultraLight">
                          {thisCountry?.region}
                        </span>
                      </li>
                      <li>
                        Sub Region:{" "}
                        <span className="font-ultraLight">
                          {thisCountry?.subregion}
                        </span>
                      </li>
                      <li>
                        Capital:{" "}
                        <span className="font-ultraLight">
                          {thisCountry?.capital}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="h-[96px] mb-[32px] lg:mb-0">
                    <ul className="h-full text-[14px] text-black dark:text-white font-normal flex flex-col justify-between lg:text-[16px]">
                      <li>
                        Top Level Domain:{" "}
                        <span className="font-ultraLight">
                          {thisCountry?.tld}
                        </span>
                      </li>
                      <li>
                        Currencies:{" "}
                        <span className="font-ultraLight">
                          {
                            Object.values(thisCountry?.currencies || {})[0]
                              ?.name
                          }
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
                </div>
              </div>

              <div className="lg:flex">
                <h3 className="text-[16px] text-black dark:text-white font-normal mb-[16px] lg:mb-0 lg:mr-[16px] lg:w-[130px]">
                  Border Countries:
                </h3>

                <div className="flex flex-wrap gap-[10px] lg:max-w-[450px]">
                  {borderNames?.map((name) => (
                    <button
                      onClick={() =>
                        name && navigate(`/${encodeURIComponent(name)}`)
                      }
                      key={name}
                      className="px-[20px] h-[28px] rounded-[2px] text-[12px] font-ultraLight text-black dark:text-white bg-white dark:bg-normal-grey shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] lg:text-[14px] cursor-pointer"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
