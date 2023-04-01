/* eslint-disable prettier/prettier */
import Link from "next/link";

/* eslint-disable react/jsx-no-undef */
const Footer = () => {
  return (
    <footer>
      <div className="p-4 bg-gray-300 mp:p-6 sm:p-16">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/home/Ebook.png"
              alt="image"
              className="object-cover lg:h-full lg:w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:pl-12">
            <div className="text-[20px] font-bold">
              <h1 className="text-center text-primary sm:text-3xl sm:text-left lg:text-4xl ">
                Want to know what’s really going on in the current job market?
              </h1>
            </div>
            <div className="mt-2 text-[18px] font-bold sm:text-2xl lg:text-3xl">
              <h2>Download our latest industry insight ebook.</h2>
            </div>
            <div className="mt-4 text-base sm:leading-relaxed sm:text-[20px] lg:text-2xl">
              <p>
                This ebook gives you the advantages of our industry insights,
                tips, advice and news, and now delivered direct to your inbox.
              </p>
            </div>
            <div className="mt-8 w-full xl:w-[60%]">
              <div className="mt-2 w-full">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Name"
                  autoComplete="name"
                  className="block py-2 px-3.5 w-full text-gray-900 placeholder:text-gray-400 rounded-md border-2 border-secondary-grey ring-1 focus:ring-2 ring-inset focus:ring-inset ring-gray-300 shadow-sm sm:text-sm sm:leading-6 focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="mt-4 w-full xl:w-[60%]">
              <div className="mt">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block py-2 px-3.5 w-full placeholder:text-gray-400 rounded-md border-2 border-secondary-grey ring-1 focus:ring-2 ring-inset focus:ring-inset ring-gray-300 shadow-sm sm:text-sm sm:leading-6 focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <button className="py-3 px-12 text-sm font-medium text-white bg-primary rounded-full focus:outline-none focus:ring shadow xl:text-xl text-rose-600 hover:text-rose-700 active:text-rose-500">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden mx-auto w-full text-white bg-secondary sm:block sm:p-6">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-center sm:justify-start">
            <span className="text-base text-left text-gray-500 dark:text-gray-400">
              © Talent Propeller {new Date().getFullYear()} | All Rights
              Reserved | Privacy Policy
            </span>
          </div>
          <div className="flex flex-row justify-center items-center">
            <a
              href="#!"
              type="button"
              className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-4 h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#!"
              type="button"
              className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-4 h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="#!"
              type="button"
              className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-4 h-full"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="block p-8 text-white bg-secondary-grey sm:hidden">
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex flex-col">
            <Link href={"/about"}>About US</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/team"}>Team</Link>
            <Link href={"/resources"}>Resources</Link>
          </div>
          <div className="flex flex-col">
            <Link href={"/careers"}>Careers</Link>
            <Link href={"/contact"}>Contacts</Link>
            <div className="flex flex-row justify-start items-center">
              <a
                href="#!"
                type="button"
                className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-4 h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#!"
                type="button"
                className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-4 h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#!"
                type="button"
                className="m-1 w-9 h-9 leading-normal text-secondary hover:text-white uppercase bg-white hover:bg-secondary rounded-full border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:bg-opacity/5"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-4 h-full"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center p-2 bg-secondary mp:p-4 sm:hidden sm:p-4">
        <div>
          <p className="text-[12px] text-center text-white">
            @Talent Propeller 2023
          </p>
        </div>
        <div>
          <p className="text-[12px] text-center text-white">
            All Rights Reserved Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
