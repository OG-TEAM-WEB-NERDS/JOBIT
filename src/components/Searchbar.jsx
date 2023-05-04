import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useDispatch, useSelector } from 'react-redux';

import { BriefcaseIcon, ChevronDownIcon, PinIcon, SearchIcon } from '../assets';
import Button from './shared/Button';
import ImageWrapper from './shared/ImageWrapper';
import { Countires } from '../samples/static-data';
import { searchJob } from '../features/filterReducer';

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState('hidden');
  const [location, setLocation] = useState('');
  const [countryList, setCountryList] = useState([]);
  const { theme } = useTheme();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { selection } = useSelector((state) => state.filter);

  console.log(selection);
  //to add a listener to hide Country dropdown on click on window
  useEffect(() => {
    return window.addEventListener('click', () => {
      setHide('hidden');
    });
  });
  const displayOptions = () => {
    const options = Countires.filter((country) =>
      country.toLowerCase().includes(location.toLowerCase())
    );
    setCountryList(options);
    setHide('');
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-natural-4 dark:bg-black-2 rounded-xl py-3 px-4 md:divide-x-2 divide-y-2 md:divide-y-0 dark:divide-black-3 justify-between gap-4 my-10">
      <div className="flex  gap-2 mr-2 w-full md:w-1/4 pt-2 md:pt-0">
        <div className="w-[24px]">
          <ImageWrapper
            src={SearchIcon}
            alt="Search icon"
            width={24}
            height={24}
            styles="grayscale"
          />
        </div>

        <input
          type="text"
          placeholder="Search for a job ..."
          className="bg-natural-4 dark:bg-black-2 text-black-1 outline-none dark:text-natural-2"
          ref={inputRef}
        />
      </div>
      <div
        className="relative flex w-full md:w-1/3 justify-between pt-3 md:pt-0"
        onClick={() => event.stopImmediatePropagation()}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <button
              type="button"
              className="flex cursor-pointer select-none w-full"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="flex gap-x-2 justify-center items-center text-natural-2 md:pl-2">
                <ImageWrapper
                  src={PinIcon}
                  alt="Pin icon"
                  width={24}
                  height={24}
                  styles="grayscale"
                />
                <input
                  placeholder="Select country name..."
                  className="bg-natural-4 dark:bg-black-2 text-black-1 outline-none dark:text-natural-2"
                  //onClick={() => setHide('hidden')}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyUp={() => displayOptions()}
                  value={location}
                />
              </div>
            </button>
            <span className={`${isOpen && 'rotate-180'}`}>
              <ImageWrapper
                src={ChevronDownIcon}
                alt="Chevron icon"
                width={24}
                height={24}
                styles="grayscale"
              />
            </span>
          </div>
          {/* Dropdown list for Countries */}
          <div
            className={`absolute mt-12 h-40 overflow-y-auto bg-white  dark:bg-gray-700 rounded-md w-full justify-between pt-3 md:pt-0 ${hide}`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              {countryList.map((items, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      setLocation(items);
                      setHide('hidden');
                    }}
                  >
                    {items}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex md:px-4 w-full md:w-1/5 pt-3 md:pt-0 justify-start items-center">
        <div className="mr-2">
          <ImageWrapper
            src={BriefcaseIcon}
            alt="Briefcase icon"
            width={24}
            height={24}
            styles="grayscale"
          />
        </div>
        <p className="text-natural-2">{selection?.empType}</p>
      </div>
      <div className="justify-end w-full md:w-1/6 pt-4 md:pt-0">
        <Button
          primary
          fullWidth
          handleClick={() => {
            dispatch(
              searchJob(`${inputRef.current.value} in ${location} || 'USA'`)
            );
          }}
        >
          Find Job
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
