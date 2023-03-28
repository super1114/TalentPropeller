import React from 'react';

const TeamJumbotron = () => {
  return (
    <section>
      <div
        className="overflow-hidden relative bg-left bg-no-repeat bg-cover lg:bg-center"
        style={{
          backgroundImage: `url('/assets/images/team/team1.png')`,
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="float-right relative py-32 px-16 mx-auto max-w-screen-lg text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl lg:text-4xl">
              <b>Meet our team</b>
            </h1>
            <h2 className="right-5 bottom-5 pt-4 text-2xl lg:text-3xl">
              Get to know us, and our best friends!
            </h2>
            <p className="py-4 text-[20px]">
              Our team is diverse and includes recruitment experts, advertising
              gurus, graphic designers, copywriters and technology developers.
              This unique combination of talent enables us to create our mix of
              human services and technology to reinvent the recruitment process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamJumbotron;
