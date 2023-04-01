// import React from "react";

const Download = () => {
  return (
    <>
      <div className="pb-10 grid grid-cols-1 bg-white lg:grid-cols-2">
        <div className="flex justify-center items-center py-5 sm:py-8 md:py-12">
          <img
            src="/assets/images/resources/TP Mobile - Ebook Icon.png"
            alt="icon-book"
            className="object-cover mp:w-[144px] mp:h-[100px] sm:w-[216px] sm:h-[150px] lg:w-[288px] lg:h-[200px] xl:w-[360px] xl:h-[250px]"
          />
        </div>
        <div className="text-tango-500 text-center mp:px-8 sm:px-12 lg:p-20 lg:text-left xl:p-24">
          <h1 className="mp:text-xl font-bold sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
            Want to know what&apos;s <i>really</i> going on in the current job
            market?
          </h1>
          <h2 className="my-2 text-base font-bold sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
            Download our latest industry insights ebook.
          </h2>
          <button className="py-2 px-10 mt-[10px] text-base text-white hover:text-gray-900 bg-[#2e2e2e] hover:bg-white rounded-full drop-shadow-lg duration-300 md:w-fit lg:text-base">
            Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center p-12 text-white bg-[#EA7101]">
          <img
            src="/assets/images/resources/icon-search.png"
            alt="icon-search"
            className="object-cover mb-4"
          />
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="sm:pr-10 text-3xl font-extrabold text-center sm:text-5xl md:text-6xl md:text-right">
              72%
            </div>
            <div className="w-full text-2xl font-medium text-left md:text-center">
              <b>of job searches start with Google</b>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-12 text-white bg-[#5b5b5b]">
          <img
            src="/assets/images/resources/icon-eye.png"
            alt="icon-eye"
            className="object-cover mb-4"
          />
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="sm:pr-10 text-3xl font-extrabold text-center sm:text-4xl md:text-6xl md:text-right">
              2+HRS
            </div>
            <div className="w-full text-2xl text-center md:text-left">
              <b>spent on average researching leaders</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
