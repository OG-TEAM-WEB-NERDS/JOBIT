import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { logo, sun, moon, hamburger, plus } from '../assets';

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/job-search';
      default:
        return '/';
    }
  };
  return (
    <ul className={`list-none flex ${isMobile ? 'flex-col h-full justify-end w-full border-b' : 'justify-center flex-row'}`}>
      {['Overview', 'Job Search', 'Estimated Salaries'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-semibold text-base text-primary mx-3
          ${isMobile && 'mb-8'}
          
          ${active === item
            ? 'text-primary'
            : 'text-natural-2'}
          `}
        >
          <Link href="/">{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Overview');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween fixed w-full z-10 p-4 flex-row border-b bg-white border-natural-6">

      <div className="flex flex-row justify-start py-4 px-8 md:flex">
        <Link
          href="/"
        >
          <div className="flexCenter cursor-pointer">
            <Image
              src={logo}
              style={{ objectFit: 'contain' }}
              width={32}
              height={32}
              alt="logo"
            />
            <p className="font-semibold text-lg ml-1 text-primary">JOBIT</p>
          </div>
        </Link>
      </div>

      <div className="flex md:hidden mr-2 w-full justify-end">
        {isOpen
          ? (
            <Image
              src={plus}
              style={{ objectFit: 'contain' }}
              width={25}
              height={25}
              alt="close"
              onClick={() => setIsOpen(false)}
              className="rotate-45"
            />
          ) : (
            <Image
              src={hamburger}
              style={{ objectFit: 'contain' }}
              width={25}
              height={25}
              alt="menu"
              onClick={() => setIsOpen(true)}
            />
          )}

        {isOpen && (
          <div className="fixed w-2/3 inset-0 top-16 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-row">
            <div className="flex flex-col justify-start items-start p-4 gap-8 w-full">
              <MenuItems active={active} setActive={setActive} isMobile />
              <div className="flex md:hidden items-center p-4 justify-between w-36">
                <Image
                  src={sun}
                  style={{ objectFit: 'contain' }}
                  width={20}
                  height={20}
                  alt="sun"
                />
                <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                <label htmlFor="checkbox" className="flexBetween w-8 h-4 rounded-2xl p-1 bg-white relative label">
                  <div className="w-3 h-3 absolute bg-primary rounded-full ball" />
                </label>
                <Image
                  src={moon}
                  style={{ objectFit: 'contain' }}
                  width={20}
                  height={20}
                  alt="moon"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-row justify-end">
        <div className="hidden flex-1 justify-center md:flex">
          <MenuItems active={active} setActive={setActive} />
        </div>
        <div className="hidden md:flex items-center pr-4 justify-between w-36">
          <Image
            src={sun}
            style={{ objectFit: 'contain' }}
            width={20}
            height={20}
            alt="sun"
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 rounded-2xl p-1 bg-white relative label"
          >
            <div className="w-3 h-3 absolute bg-primary rounded-full ball" />
          </label>
          <Image
            src={moon}
            style={{ objectFit: 'contain' }}
            width={20}
            height={20}
            alt="moon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
