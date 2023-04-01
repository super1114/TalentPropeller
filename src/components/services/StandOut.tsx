const StandOut = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-0 bg-black sm:grid-cols-2">
        <div className="flex flex-col justify-center items-center px-6 sm:p-20">
          <div className="flex flex-row pt-10">
            <div className="w-full h-full">
              <img
                src="/assets/images/services/TP Mobile - Service - Advertised.png"
                alt="TP Mobile - Service - Advertised"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-8 text-primary">
              <h1 className="text-4xl">100,000</h1>
              <h2 className="text-3xl">ADS ARE</h2>
              <p className="text-base">ADVERSTED RIGHT NOW</p>
            </div>
          </div>
          <div className="py-10">
            <h1 className="text-[20px] font-bold text-white">
              How will you stand out
            </h1>
          </div>
        </div>
        <div className="px-12 w-full text-center text-white bg-primary">
          <h3 className="py-16 text-[20px]">
            We are committed to helping you attract the right talent for your
            business.
          </h3>
          <p className="text-base">This isn’t a short-term issue….</p>
          <p className="pt-8 pb-24 text-base">
            The last few years have led many people to re-think priorities,
            re-think career pathways, and it’s reconfigured many work places
            (working from home, working from anywhere…). Unemployment at an
            all-time low = limited people actively looking for work = limited
            people looking at a job board
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-0 bg-white sm:grid-cols-2">
        <div className="mx-auto mt-[-60px] w-2/3 h-2/3">
          <img
            src="/assets/images/services/TP Mobile - Service - What do you do.jpg"
            alt="TP Mobile - Service - What do you do.jpg"
            className="object-cover"
          />
        </div>
        <div className="px-12 w-full text-center text-white">
          <h3 className="pt-16 text-[20px] font-bold text-secondary-grey">
            So what do you do?
          </h3>
          <p className="py-8 text-base text-black">
            Work with a team that has a track record of building successful
            recruitment strategies for businesses across the country.
          </p>
          <p className="text-base text-black">
            Addressing talent shortages requires a multi-faceted approach that
            focuses on creating an attractive employer brand, offering
            flexibility, upskilling and reskilling employees, partnering with
            educational institutions, and leveraging social media and employee
            referrals
          </p>
          <p className="py-8 text-base text-black">
            This is where Talent Propeller partners with you to deliver an ‘out
            of the box’ recruitment solution.
          </p>
        </div>
      </div>
    </>
  );
};

export default StandOut;
