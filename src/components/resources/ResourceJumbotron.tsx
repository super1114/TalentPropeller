import React from 'react';

const ResourceJumbotron = () => {
  return (
    <div
      className="overflow-hidden relative bg-right bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/resources/first.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="float-left relative py-32 px-16 mx-auto max-w-screen-xl text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold">
            Let us share our recruitment insights and industry trends with you
          </h1>

          <p className="mt-4 max-w-md text-2xl sm:leading-relaxed">
            Want to know which media is delivering candidates?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceJumbotron;
