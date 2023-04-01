/* eslint-disable prettier/prettier */
import React from "react";

const Advertise = () => {
  return (
    <section>
      <div className="grid grid-cols-1 text-white lg:grid-cols-2">
        <div className="block w-full lg:hidden">
          <img
            src="/assets/images/career/sharon.png"
            alt="sharon.png"
            className="object-cover w-full h-full"
          ></img>
        </div>
        <div className="flex flex-col justify-center bg-primary mp:py-6 mp:px-8 mp:text-center sm:p-12 sm:text-left">
          <div>
            <p className="pb-5 mp:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              We hire ambitious individuals for recruitment, account management
              and business development roles.
            </p>
            <p className="pt-5 mp:text-base sm:text-xl lg:text-2xl xl:text-3xl">
              In our offices there is a lot of banter, singing, laughter, but
              also deadlines, focus and determination to be the best we possibly
              can be. We work hard and play hard and believe to be truly
              successful at work you need a happy and harmonious environment.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/images/career/sharon.png"
            alt="sharon.png"
            className="object-cover w-full h-full"
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-1 text-white lg:grid-cols-2">
        <div>
          <img
            src="/assets/images/career/victoria.png"
            alt="victoria.png"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center bg-primary mp:py-6 mp:px-8 mp:text-center sm:p-12 sm:text-left">
          <div>
            <p className="pb-5 mp:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              We hire ambitious individuals for recruitment, account management
              and business development roles.
            </p>
            <p className="pt-5 mp:text-base sm:text-xl lg:text-2xl xl:text-3xl">
              We won’t beat around the bush - we work hard, and being in an
              agency environment means there is occasional overtime and really
              busy days, but in return, we believe in rewarding our staff and
              celebrating our success with perks such as on-site massages, team
              dinners, social outings and a weekly friday night happy hour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
