const JumbotronExtra = () => {
  return (
    <section
      className="overflow-hidden relative bg-right bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/home/jumbotron-extra.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="items-center py-32 px-8 mx-auto max-w-screen-xl text-primary sm:px-6 lg:flex lg:relative lg:px-4 lg:h-screen">
        <div className="px-8 max-w-xl sm:pl-2 sm:text-left">
          <h1 className="text-3xl sm:text-4xl">
            Three ways we help you
            <br />
            solve your talent challenges:
          </h1>
          <div className="flex items-center mt-8">
            <img
              className="block h-18 w-18"
              src="/assets/images/home/icon-megaphone.png"
              alt="megaphone-icon"
            />
            <div className="ml-8">
              <h2 className="mt-4 text-2xl sm:text-3xl">
                Innovative, cost-effective
                <br />
                advertising strategies that work
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              className="block h-18 w-18"
              src="/assets/images/home/icon-shortlist.png"
              alt="shortlist-icon"
            />
            <div className="ml-8">
              <h2 className="text-2xl sm:text-3xl">
                Shortlist faster with no placement fees
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              className="block h-18 w-18"
              src="/assets/images/home/icon-skilltest.png"
              alt="skilltest-icon"
            />
            <div className="ml-8">
              <h2 className="text-2xl sm:text-3xl">
                Advanced skills testing options
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumbotronExtra;
