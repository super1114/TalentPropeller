import React from 'react';

const Advertise = () => {
  return (
    <section>
      <div className="flex flex-col-reverse text-white bg-primary md:flex-row">
        <div className="flex-1 justify-between items-center p-12 m-auto">
          <div className="m-auto max-w-xl">
            <p className="py-5 text-3xl">
              We hire ambitious individuals for recruitment, account management
              and business development roles.
            </p>
            <p className="py-5 text-2xl">
              In our offices there is a lot of banter, singing, laughter, but
              also deadlines, focus and determination to be the best we possibly
              can be. We work hard and play hard and believe to be truly
              successful at work you need a happy and harmonious environment.
            </p>
          </div>
        </div>
        <div
          className="flex-1 py-64 px-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('/assets/images/career/sharon.png')`,
          }}
        ></div>
      </div>
      <div className="flex flex-col text-white bg-secondary-grey md:flex-row">
        <div
          className="flex-1 py-64 px-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('/assets/images/career/victoria.png')`,
          }}
        ></div>
        <div className="flex-1 justify-between items-center p-12 m-auto">
          <div className="m-auto max-w-xl">
            <p className="py-5 text-3xl">Here you are valued and rewarded.</p>
            <p className="py-5 text-2xl">
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
