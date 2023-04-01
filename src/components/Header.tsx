/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useState } from "react";

import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";
import navConfig from "@/config/nav.config";
import { Button } from "@nextui-org/react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center px-3 w-full text-lg text-white bg-primary md:py-0">
        <div className="block lg:hidden">
          <button
            className="p-2 text-white rounded-md focus:border focus:border-gray-400 outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/" passHref>
            <img
              alt="logo"
              src="/logo.png"
              className="object-cover hover:cursor-pointer mp:h-[64px] sm:h-[80px] md:h-[88px] lg:h-[92px]"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <button className="text-3xl">
            <AiOutlineSearch />
          </button>
        </div>
        <div
          className={`w-full text-white lg:flex lg:w-auto lg:items-center ${
            navbar ? "" : "hidden"
          }`}
        >
          <ul className="md:flex md:justify-between md:pt-0">
            {navConfig.map((navItem: TNavItem, index: number) => (
              <li
                key={`nav-${index}`}
                className="flex justify-center px-4 mr-1 rounded-full border border-transparent hover:border-white cursor-pointer select-none"
              >
                <Link href={navItem.link} passHref>
                  <button onClick={() => setNavbar(false)}>
                    {navItem.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
