import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { MainContext } from "../../contexts/mainContext";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const { countries } = useContext<MainContextType>(MainContext);
  const navigate = useNavigate();
  const schema = yup.object({
    name: yup
      .string()
      .test("Country exists", "Enter correct name", (country) => {
        if (!country) {
          return true;
        }
        return countries.some(
          (c) => c.name.common.toLowerCase() === country.toLowerCase()
        );
      }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const inputSubmit = (data: { name?: string | undefined }) => {
    const foundCountry = countries.find(
      (country) =>
        country.name.common.toLowerCase() === data.name?.toLowerCase()
    );
    if (foundCountry) {
      navigate(`/${encodeURIComponent(foundCountry.name.common)}`);
      reset();
    }
  };

  return (
    <>
      <div className="w-full h-[48px] relative mb-[40px] lg:w-[480px] lg:h-[56px] lg:m-0">
        <form className="w-full h-full" onSubmit={handleSubmit(inputSubmit)}>
          <input
            type="text"
            placeholder="Search for a country…"
            className="w-full h-full rounded-[5px] bg-white dark:bg-normal-grey shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] placeholder:text-[12px] placeholder:font-light placeholder:text-[#C4C4C4] pl-[75px] pr-[30px] text-black dark:text-white font-normal text-[16px] lg:placeholder:text-[14px] cursor-pointer"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-600 font-normal absolute top-[12px] right-[30px]">
              {errors.name.message}!
            </p>
          )}
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute top-[16px] left-[32px] lg:top-[19px] lg:w-[18px] lg:h-[18px] cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
            fill="#B2B2B2"
            className="dark:fill-white absolute top-0"
          />
        </svg>
      </div>
    </>
  );
};

export default Search;
