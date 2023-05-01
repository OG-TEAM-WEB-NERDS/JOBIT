import { useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { BriefcaseIcon, ChevronDownIcon, PinIcon, SearchIcon } from '../assets';
import Button from './shared/Button';

const Searchbar = ({ setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const inputRef = useRef();

  // const handleClick = () => {
  //   setSearch(inputRef.current.value)
  // };
  return (
    <div className="flex flex-col md:flex-row items-center bg-natural-4 dark:bg-black-2 rounded-xl py-3 px-4 md:divide-x-2 divide-y-2 md:divide-y-0 dark:divide-black-3 justify-between gap-4 my-10">
      <div className="flex  gap-2 mr-2 w-full md:w-1/4 pt-2 md:pt-0">
        <div className="w-[24px]">
          <Image
            src={SearchIcon}
            alt="Search icon"
            width={24}
            height={24}
            className="grayscale"
          />
        </div>

        <input
          type="text"
          placeholder="Search for a job ..."
          className="bg-natural-4 dark:bg-black-2 text-black-1 outline-none dark:text-natural-2"
          ref={inputRef}
        />
      </div>
      <div className="flex w-full md:w-1/3 justify-between pt-3 md:pt-0">
        <button
          type="button"
          className="flex cursor-pointer select-none w-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="flex gap-x-2 justify-center items-center text-natural-2 md:px-2">
            <Image
              src={PinIcon}
              alt="Pin icon"
              width={24}
              height={24}
              className="grayscale"
            />
            Select Location
          </p>
        </button>
        <span className={`self-center ${isOpen && 'rotate-180'}`}>
          <Image
            src={ChevronDownIcon}
            alt="Chevron icon"
            width={24}
            height={24}
            className="grayscale"
          />
        </span>
      </div>
      <div className="flex md:px-4 w-full md:w-1/5 pt-3 md:pt-0 justify-start items-center">
        <div className="mr-2">
          <Image
            src={BriefcaseIcon}
            alt="Briefcase icon"
            width={24}
            height={24}
            className="grayscale"
          />
        </div>
        <p className="text-natural-2">Job Type</p>
      </div>
      <div className="justify-end w-full md:w-1/6 pt-4 md:pt-0">
        <Button
          primary
          fullWidth
          handleClick={() => {
            setSearch(inputRef.current.value);
          }}
        >
          Find Job
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
