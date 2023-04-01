/* eslint-disable prettier/prettier */
import React from "react";

import { QuoteIcon } from "../icons";

const Collegue = () => {
  return (
    <div className="text-white bg-secondary mp:p-6 sm:p-20 xl:p-32">
      <div className="flex flex-col items-center text-center xl:flex-row xl:text-left">
        <div className="pr-5 pb-8 w-full xl:pb-0 xl:w-1/3">
          <h3 className="pb-8 mp:text-xl sm:text-4xl xl:text-3xl">
            Learn about our team from our other members
          </h3>
          <div className="flex mp:flex-col mp:items-center xl:flex-row xl:items-start">
            <div className="block pb-5 sm:hidden">
              <QuoteIcon size={20} color="#EB7324" />
            </div>
            <div className="hidden sm:block sm:pb-5 xl:pb-0">
              <QuoteIcon size={20} color="#EB7324" />
            </div>
            <p className="mp:text-xl sm:pl-3 sm:text-3xl xl:text-2xl">
              I have loved the journey and opportunities this has presented me.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#5b5b5b] xl:w-2/3">
          <div className="flex flex-col lg:flex-row">
            <div>
              <img
                src="/assets/images/career/quote - dianne.jpg"
                alt="quote - dianne.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 mp:text-center sm:p-6 sm:text-left">
              <label className="text-2xl font-bold sm:text-4xl xl:text-3xl">
                Dianne Bow
              </label>
              <h2 className="mb-2 text-2xl sm:text-3xl xl:text-2xl">
                <i>Operations Manager</i>
              </h2>
              <p className="mp:text-xl sm:text-3xl xl:text-2xl">
                I’ve been a part of the business since our inception in 2009 and
                manage all finance functions. I have thoroughly enjoyed the
                challenges that have come from our international expansion and
                launch of innovative new recruitment products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collegue;
