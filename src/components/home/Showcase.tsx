/* eslint-disable prettier/prettier */
const Showcase = () => {
  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-8 bg-primary mp:p-10 sm:p-12 lg:p-10 xl:p-20">
        <div>
          <img
            className="object-cover w-full h-full"
            src="/assets/images/home/icon-people.png"
            alt="icon-people"
          />
        </div>
        <div className="items-center mt-[20px] sm:flex">
          <div>
            <h2 className="font-bold text-center text-white mp:text-4xl sm:ml-3 sm:text-5xl sm:text-left lg:text-3xl xl:text-4xl">
              13,000+
            </h2>
          </div>
          <div className=" text-white sm:ml-5">
            <p className="font-extrabold mp:text-xl mp:text-center sm:text-3xl lg:text-2xl xl:text-2xl">
              candidates visit our platforms every month
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-16 bg-secondary-grey mp:p-10 sm:p-12 lg:p-10 xl:p-20">
        <div>
          <img
            className="object-cover w-full h-full"
            src="assets/images/home/icon-job-ads.png"
            alt="icon-job-ads"
          />
        </div>
        <div className="items-center mt-8 sm:flex">
          <div>
            <h2 className="font-bold text-center text-white mp:text-4xl sm:ml-3 sm:text-5xl sm:text-left lg:text-3xl xl:text-4xl">
              4,000+
            </h2>
          </div>
          <div className="mb-5 text-white sm:ml-[20px]">
            <p className="font-extrabold mp:text-xl mp:text-center sm:text-3xl lg:text-2xl xl:text-2xl">
              job ads placed every month
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto w-2/3 h-2/3 sm:w-full sm:h-full">
        <img
          src="/assets/images/home/placeholder.png"
          alt="icon-people"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-8 text-white sm:p-12 md:p-24 lg:p-16 xl:p-20">
        <div>
          <h1 className="text-base font-bold text-center text-secondary-grey sm:text-5xl sm:text-left lg:text-3xl xl:text-4xl">
            Let’s not muck around
          </h1>
        </div>
        <div>
          <p className="py-4 text-sm text-center text-black sm:text-3xl sm:text-left lg:text-xl xl:text-2xl">
            With a shortage of candidates out there, you’ve got be clever, and
            you’ve got to be quick. We like seeing our clients succeed from
            hiring great people, due to a robust, successful recruitment
            strategy. We’re driven by innovation and passionate about shaking
            things up. But more about us later.
          </p>
        </div>
        <div className="pb-10 text-black">
          <h1 className="text-[18px] text-center sm:text-4xl sm:text-left md:text-4xl lg:text-2xl xl:text-3xl">
            If you’re serious about finding good talent, call us
          </h1>
        </div>
        <div className="flex justify-center sm:justify-start">
          <button className="py-2 px-10 font-bold text-center text-white bg-primary rounded-full focus:outline-none focus:ring shadow sm:text-3xl sm:bg-secondary-grey lg:text-xl xl:text-2xl text-rose-600 hover:text-rose-700 active:text-rose-500">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
