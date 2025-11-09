import { useNavigate, type NavigateFunction } from "react-router-dom";

const Country: React.FC<CountryProps> = ({ country }) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${encodeURIComponent(country.name.common)}`);
        }}
        className="w-[264px] h-auto max-h-[450px] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] rounded-[5px] bg-white dark:bg-normal-grey cursor-pointer"
      >
        <img
          className="w-full object-cover"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
        <div className="w-full  p-[24px]">
          <h1 className="text-[18px] text-black dark:text-white font-bold mb-[16px]">
            {country.name.common}
          </h1>
          <div className="text-[14px] text-black dark:text-white font-normal flex flex-col gap-[8px]">
            <h6>
              Population:{" "}
              <span className="font-ultraLight">
                {country.population.toLocaleString()}
              </span>
            </h6>
            <h6>
              Region: <span className="font-ultraLight">{country.region}</span>
            </h6>
            <h6>
              Capital:{" "}
              <span className="font-ultraLight">{country.capital}</span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
