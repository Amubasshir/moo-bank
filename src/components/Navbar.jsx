import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="logo-image" className="w-[128px] h[36px]" />
      <ul className="list-none sm:flex hidden justify-end item-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]${
              index === navLinks.length - 1 ? 'mr-0' : 'mr10'
            } text-white mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end item-center">
        <img
          src={toggle ? close : menu}
          alt="menu-image"
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 max-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-white cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } text-white`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
