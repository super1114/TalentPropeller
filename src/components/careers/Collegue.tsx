import React from 'react';

import { QuoteIcon } from '../icons';

const Collegue = () => {
  return (
    <div className="items-center p-32 text-white bg-secondary">
      <div className="flex flex-col items-center text-left lg:flex-row">
        <div className="w-full lg:w-2/5">
          <h3 className="mb-8 text-3xl">
            Learn about our team from our other members
          </h3>
          <div className="flex">
            <QuoteIcon size={45} color="#EB7324" />
            <p className="px-10 text-xl">
              I have loved the journey and opportunities this has presented me.
            </p>
          </div>
        </div>
        <div className="mt-5 w-full lg:w-3/5">
          <div className="flex ml-16 bg-[#5b5b5b]">
            <div
              className="p-32 w-1/3 bg-center bg-cover"
              style={{
                backgroundImage: `url('/assets/images/career/quote - dianne.jpg')`,
              }}
            ></div>
            <div className="px-6 m-auto w-2/3 text-left">
              <label className="text-2xl font-bold">Dianne Bow</label>
              <h2 className="mb-2">
                <i>Operations Manager</i>
              </h2>
              <p>
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
