import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { BriefcaseIcon, ChevronIcon, PinIcon, SearchIcon } from './icons';
import Button from './Button';

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="flex items-center bg-natural-4 rounded-xl py-3 px-4">
      <div className="flex ml-2 gap-2 mr-2 w-1/4">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a job ..."
          className="bg-natural-4 text-black-1 outline-none"
        />
      </div>
      <div className="flex w-1/2">
        <button type="button" className="flex justify-between cursor-pointer select-none w-full" onClick={() => setIsOpen((prev) => !prev)}>
          <PinIcon />
          <p className="text-natural-2 px-2">Select Location</p>
          <div className={`justify-end ${isOpen && 'rotate-180'}`}>
            <ChevronIcon />
          </div>
        </button>
      </div>
      <div className="flex px-4 w-1/5">
        <div className="mr-2">
          <BriefcaseIcon />
        </div>
        <p className="text-natural-2">Job Type</p>
      </div>
      <div className="w-1/6 justify-end">
        <Button primary>Find Job</Button>
      </div>
    </div>
  );
};

export default Searchbar;
