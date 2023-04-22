import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { logo, sun, moon, hamburger, cross } from '../assets';

const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/job-search';
      case 2:
        return '/estimated-salaries';
      default:
        return '/';
    }
  };
  return (
    <ul
      className={`list-none flex ${
        isMobile
          ? 'flex-col h-full justify-end w-full border-b border-natural-6 dark:border-black-1'
          : 'justify-center flex-row'
      }`}
    >
      {['Overview', 'Job Search', 'Estimated Salaries'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
            setIsOpen(false);
          }}
          className={`flex flex-row items-center font-semibold text-2xl sm:text-xl md:text-base md:px-4 hover:text-primary
          ${isMobile ? 'mb-8' : null}
          
          ${active === item ? 'text-primary' : 'text-natural-2'}
          `}
        >
          <Link href={generateLink(i)}>{item}</Link>
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
    <nav className="fixed w-full z-10 py-6 border-b bg-white dark:bg-black-1 border-natural-6 dark:border-black-3 inset-x-0">
      <div className="flexBetween flex-row container mx-auto px-4">
        <div className="flex flex-row justify-start md:flex">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="flexCenter cursor-pointer">
              <Image
                src={logo}
                style={{ objectFit: 'contain' }}
                width={120}
                height={22}
                alt="logo"
              />
            </div>
          </Link>
        </div>

        <div className="flex md:hidden w-full justify-end">
          <Image
            src={isOpen ? cross : hamburger}
            className="object-contain aspect-square cursor-pointer"
            width={30}
            height={30}
            alt={isOpen ? 'Menu' : 'close'}
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <div className="fixed inset-0 top-16 z-4 nav-h flex justify-between flex-row">
              <div className="flex container mx-auto w-full flex-col justify-start items-start p-4 gap-8 bg-white dark:bg-black-1">
                <MenuItems
                  active={active}
                  setActive={setActive}
                  isMobile
                  setIsOpen={setIsOpen}
                />
                <div className="flex md:hidden items-center py-4 justify-between w-28">
                  <Image
                    src={sun}
                    style={{ objectFit: 'contain' }}
                    width={20}
                    height={20}
                    alt="sun"
                  />
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  />
                  <label
                    htmlFor="checkbox"
                    className="flexBetween w-8 h-4 rounded-2xl p-1 bg-white dark:bg-black-3 relative label cursor-pointer"
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
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-row justify-end">
          <div className="hidden flex-1 justify-center md:flex">
            <MenuItems
              active={active}
              setActive={setActive}
              setIsOpen={setIsOpen}
            />
          </div>
          <div className="hidden md:flex items-center justify-between w-28">
            <Image
              src={sun}
              style={{ objectFit: 'contain' }}
              width={20}
              height={20}
              alt="sun"
            />
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <label
              htmlFor="checkbox"
              className="flexBetween w-8 h-4 rounded-2xl p-1 bg-white dark:bg-black-3 relative label cursor-pointer"
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
      </div>
    </nav>
  );
};

export default Navbar;
