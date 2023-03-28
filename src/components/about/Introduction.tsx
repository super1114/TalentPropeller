const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="flex-1 py-64 px-12 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/assets/images/about/MASTHEAD-bigsplash-365.jpg')`,
        }}
      ></div>
      <div className="flex-1 items-center p-12 bg-[#E3E4E3]">
        <h1 className="text-4xl font-extrabold">
          A lot of ‘us’ is reflected in this website.
        </h1>
        <p className="py-5 text-xl text-gray">
          We thrive on seeing our clients succeed from hiring great people which
          has come from having a robust, successful recruitment and brand
          strategy.
        </p>
        <p className="text-xl text-gray">
          We are proudly a female led organization. Confident. Unafraid to
          challenge the status quo. Willing to call it like it is, and extremely
          proud of what we’ve accomplished over our 21-year history.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
