/* eslint-disable prettier/prettier */
import React from "react";

import { QuoteIcon } from "../icons";

const Collegue = () => {
  return (
    <div className="p-12 text-white bg-secondary sm:p-20 xl:p-32">
      <div className="flex flex-col items-center text-center xl:flex-row xl:text-left">
        <div className="pr-5 pb-8 w-full xl:pb-0 xl:w-1/3">
          <h3 className="mb-8 text-2xl sm:text-4xl xl:text-3xl">
            Learn about our team from our other members
          </h3>
          <div className="flex flex-col items-center sm:flex-row sm:items-start">
            <div className="pb-5">
              <QuoteIcon size={30} color="#EB7324" />
            </div>
            <p className="px-5 text-2xl sm:text-3xl sm:text-left xl:text-2xl">
              A vibrant and dynamic workplace led by women, which inspires me
              everyday to reach my potentials
            </p>
          </div>
        </div>
        <div className="w-full bg-[#5b5b5b] xl:w-2/3">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full">
              <img
                src="/assets/images/team/team4.png"
                alt="quote - dianne.jpg"
                className="object-cover w-full h-full"
              ></img>
            </div>
            <div className="p-10 text-center sm:text-left">
              <label className="text-2xl font-bold sm:text-4xl xl:text-3xl">
                Rikki Somerville
              </label>
              <h2 className="pb-10 mb-2 text-2xl sm:text-3xl xl:text-2xl">
                <i>Creative Director</i>
              </h2>
              <p className="text-base sm:text-3xl xl:text-2xl">
                In the two years I have been part of the Talent Propeller team I
                have grown from Advertising Coordinator to 2IC to now managing
                our advertising division for New Zealand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collegue;
