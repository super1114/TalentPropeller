import React from 'react';

const Download = () => {
  return (
    <div className="grid grid-cols-1 bg-white md:grid-cols-2">
      <div className="mx-auto mt-10 md:m-auto">
        <img src="/assets/images/resources/icon-book.png" alt="icon-book" />
      </div>
      <div className="items-center p-24 m-auto text-tango-500">
        <h1 className="my-2 text-3xl font-bold">
          Want to know what&apos;s <i>really</i> going on in the current job
          market?
        </h1>
        <h2 className="my-2 text-2xl font-bold">
          Download our latest industry insights ebook.
        </h2>
        <button className="py-4 px-16 m-5 text-white hover:text-gray-900 bg-[#2e2e2e] hover:bg-white rounded-full drop-shadow-lg duration-300">
          Download
        </button>
      </div>
      <div className="justify-center items-center p-16 text-white bg-[#EA7101]">
        <img
          src="/assets/images/resources/icon-search.png"
          alt="icon-search"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-1 items-center p-4 md:grid-cols-2">
          <div className="text-[66px] font-extrabold text-center">72%</div>
          <div className="text-2xl text-left">
            <b>of job searches start with Google</b>
          </div>
        </div>
      </div>
      <div className="justify-center items-center p-16 text-white bg-[#5b5b5b]">
        <img
          src="/assets/images/resources/icon-eye.png"
          alt="icon-eye"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-2 items-center p-4">
          <div className="text-[66px] font-extrabold text-center">2+ HRS</div>
          <div className="text-2xl text-left">
            <b>spent on average researching leaders</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
