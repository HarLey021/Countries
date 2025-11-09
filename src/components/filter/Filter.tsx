import { useContext, useState } from "react";
import { MainContext } from "../../contexts/mainContext";

const Filter: React.FC = () => {
  const { setRegion } = useContext<MainContextType>(MainContext);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="w-[200px] h-[48px] rounded-[5px] bg-[white] dark:bg-normal-grey shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] px-[24px] py-[14px] flex justify-between items-center mb-[4px] lg:h-[56px] lg:m-0 cursor-pointer"
        >
          <span className=" text-black text-[12px] font-light dark:text-white lg:text-[14px]">
            Filter by Region
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="lg:w-[12px] lg:h-[12px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
              fill="black"
              className="dark:fill-white"
            />
          </svg>
        </button>
        {showFilter && (
          <div className="w-[200px] h-[164px] bg-white rounded-[5px] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] dark:bg-normal-grey px-[24px] py-[16px] z-5 text-[12px] font-light text-black dark:text-[white] flex flex-col justify-between items-start absolute top-[60px] lg:text-[14px] cursor-pointer">
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion(""), setShowFilter(false);
              }}
            >
              All
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion("Africa"), setShowFilter(false);
              }}
            >
              Africa
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion("Americas"), setShowFilter(false);
              }}
            >
              America
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion("Asia"), setShowFilter(false);
              }}
            >
              Asia
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion("Europe"), setShowFilter(false);
              }}
            >
              Europe
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setRegion("Oceania"), setShowFilter(false);
              }}
            >
              Oceania
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
