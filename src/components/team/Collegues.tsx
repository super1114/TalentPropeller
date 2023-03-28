import React from 'react';

import Partnership from '../home/Partnership';

const Collegues = () => {
  return (
    <div className="items-center text-white bg-[#2e2e2e]">
      <div className="flex flex-col-reverse bg-white lg:grid lg:grid-cols-2">
        <div className="p-16 m-auto text-white md:flex-1">
          <h1 className="text-3xl text-tango-500">
            <b className="text-left">
              Learn more about <br />
              joining our amazing team
            </b>
          </h1>
          <button className="py-2 px-20 mt-10 text-xl text-white hover:text-tango-500 bg-tango-500 hover:bg-white rounded-full border-2 hover:border-tango-500 drop-shadow-lg duration-300">
            Career
          </button>
        </div>
        <div className="md:flex-1">
          <img
            src="/assets/images/team/team3.png"
            alt="team3"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center m-24 text-left lg:flex-row">
        <div className="w-full lg:w-2/5">
          <h3 className="mb-8 text-3xl">
            Learn about our team from our other members
          </h3>
          <div className="flex">
            <img
              src="/assets/images/career/quote.png"
              alt="quote-icon"
              className="ml-[-50px] h-[30px]"
            />
            <p className="px-10 text-xl">
              A vibrant and dynamic workplace led by women, which inspires me
              everyday to reach my potentials.
            </p>
          </div>
        </div>
        <div className="mt-5 w-full lg:w-3/5">
          <div className="flex ml-16 bg-[#5b5b5b]">
            <div
              className="p-32 w-1/3 bg-center bg-cover"
              style={{
                backgroundImage: `url('/assets/images/team/team4.png')`,
              }}
            ></div>
            <div className="px-6 m-auto w-2/3 text-left">
              <label className="text-2xl font-bold">Rikki Somerville</label>
              <h2 className="mb-2">
                <i>Creative Director</i>
              </h2>
              <p className="text-xl">
                In the two years I have been part of the Talent Propeller team I
                have grown from Advertising Coordinator to 2IC to now managing
                our advertising division for New Zealand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Partnership />
    </div>
  );
};

export default Collegues;
