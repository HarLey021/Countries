import { useState } from "react";

const Filter: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="w-[200px] h-[48px] rounded-[5px] bg-[white] dark:bg-normal-grey shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] px-[24px] py-[14px] flex justify-between items-center mb-[4px]"
        >
          <span className=" text-black text-[12px] font-light dark:text-white">
            Filter by Region
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
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
          <div className="w-[200px] h-[144px] bg-white rounded-[5px] shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] dark:bg-normal-grey px-[24px] py-[16px] z-5 text-[12px] font-light text-black dark:text-[white] flex flex-col justify-between items-start absolute top-[52px]">
            <button>Africa</button>
            <button>America</button>
            <button>Asia</button>
            <button>Europe</button>
            <button>Oceania</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
