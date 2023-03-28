import { useState } from 'react';

import Link from 'next/link';

import navConfig from '@/config/nav.config';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center px-4 w-full text-lg text-white bg-primary md:py-0">
        <div>
          <Link href="/" passHref>
            <img
              alt="logo"
              src="/logo.png"
              className="h-[64px] hover:cursor-pointer"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2 text-gray-700 rounded-md focus:border focus:border-gray-400 outline-none"
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
        <div
          className={`w-full text-white lg:flex lg:w-auto lg:items-center ${
            navbar ? '' : 'hidden'
          }`}
        >
          <ul className="md:flex md:justify-between md:pt-0">
            {navConfig.map((navItem: TNavItem, index: number) => (
              <li
                key={`nav-${index}`}
                className="flex justify-center px-4 mr-1 rounded-full border border-transparent hover:border-white cursor-pointer select-none"
              >
                <Link href={navItem.link} passHref>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
