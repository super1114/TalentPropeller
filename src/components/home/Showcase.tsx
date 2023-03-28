const Showcase = () => {
  return (
    <section className="grid grid-cols-1 gap-0 md:grid-cols-2">
      <div className="py-16 bg-primary md:py-32">
        <img
          className="px-8"
          src="/assets/images/home/icon-people.png"
          alt="icon-people"
        />
        <div className="flex flex-row justify-center items-center px-16 mt-8">
          <h2 className="float-right px-8 text-6xl font-bold text-white">
            13,000+
          </h2>
          <div className="float-left px-8 text-white">
            <p className="text-2xl">
              candidates visit our
              <br />
              platforms every month
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-secondary-grey md:py-32">
        <img
          className="py-16 px-8 md:pb-8"
          src="assets/images/home/icon-job-ads.png"
          alt="icon-job-ads"
        />
        <div className="flex flex-row justify-center items-center px-16 mt-8">
          <h2 className="float-right px-8 text-6xl font-bold text-white">
            4,000+
          </h2>
          <div className="float-left px-8 text-white">
            <p className="text-2xl">
              job ads placed
              <br />
              every month
            </p>
          </div>
        </div>
      </div>
      <div
        className="py-16 bg-center bg-no-repeat bg-cover md:py-32"
        style={{
          backgroundImage: `url('/assets/images/home/placeholder.png')`,
        }}
      >
        <div className="flex flex-row justify-center items-center py-32 px-16">
          <h2 className="float-right px-8 text-5xl text-white">Placeholder</h2>
        </div>
      </div>
      <div className="p-16 text-white bg-primary md:py-32">
        <div className="py-16 mx-auto max-w-xl text-left">
          <h1 className="text-4xl font-bold">
            If you’re serious about finding good talent, don’t delay
          </h1>
          <p className="pr-20 mt-8 text-2xl">
            There’s a lot of competition for top quality candidates! Call us
            today to find out how we can help your recruitment strategy.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <button className="block py-3 px-12 w-full text-lg font-bold text-center text-white bg-secondary-grey rounded-full focus:outline-none focus:ring shadow sm:w-auto text-rose-600 hover:text-rose-700 active:text-rose-500">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
