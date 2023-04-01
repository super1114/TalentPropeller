const Introduction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src="/assets/images/about/MASTHEAD-bigsplash-365.jpg"
          alt="MASTHEAD-bigsplash-365.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="block lg:hidden">
        <img
          src="/assets/images/about/second.png"
          alt="MASTHEAD-bigsplash-365.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col p-4 sm:p-12 bg-[#E3E4E3]">
        <h1 className="font-extrabold text-center mp:text-2xl sm:text-4xl lg:text-left lg:text-4xl xl:text-5xl">
          A lot of ‘us’ is reflected in this website.
        </h1>
        <p className="py-5 text-secondary-grey text-center mp:text-xl sm:text-3xl lg:text-left lg:text-2xl xl:text-3xl">
          We thrive on seeing our clients succeed from hiring great people which
          has come from having a robust, successful recruitment and brand
          strategy.
        </p>
        <p className="text-secondary-grey text-center mp:text-xl sm:text-3xl lg:text-left lg:text-2xl xl:text-3xl">
          We are proudly a female led organization. Confident. Unafraid to
          challenge the status quo. Willing to call it like it is, and extremely
          proud of what we’ve accomplished over our 21-year history.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
