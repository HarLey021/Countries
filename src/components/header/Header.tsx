import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="w-full h-[80px] bg-white dark:bg-normal-grey  px-[16px] flex justify-between items-center">
      <h1 className="text-[14px] text-dark font-bold dark:text-white">
        Where in the world?
      </h1>
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className="flex items-center gap-[8px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
            fill="white"
            stroke="#111517"
            className="dark:stroke-0"
          />
        </svg>
        <h6 className="text-[12px] font-normal text-dark dark:text-white">
          Dark Mode
        </h6>
      </button>
    </div>
  );
};

export default Header;
