/* eslint-disable prettier/prettier */
const Features = () => {
  return (
    <section>
      <div className="grid grid-cols-3 mp:px-4 sm:px-12 lg:pt-20 ">
        <div className="mt-3 text-center">
          <img
            src="/assets/images/about/nuclear-explosion.png"
            alt="disruptive"
            className="object-cover mx-auto mp:w-[60px] mp:h-[60px] sm:w-[120px] sm:h-[120px] xl:w-[188px] xl:h-[188px]"
          />
          <h1 className="mt-10 font-bold text-tango-500 sm:text-2xl md:text-4xl lg:text-5xl">
            Disruptive
          </h1>
          <h2 className="mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl">
            <b>in our style</b>
          </h2>
        </div>
        <div className="mt-3 text-center">
          <img
            src="/assets/images/about/innovation.png"
            alt="disruptive"
            className="object-cover mx-auto mp:w-[60px] mp:h-[60px] sm:w-[120px] sm:h-[120px] xl:w-[188px] xl:h-[188px]"
          />
          <h1 className="mt-10 font-bold text-tango-500 sm:text-2xl md:text-4xl lg:text-5xl">
            Innovative
          </h1>
          <h2 className="mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl">
            <b>in our attitude</b>
          </h2>
        </div>
        <div className="mt-3 text-center">
          <img
            src="/assets/images/about/creativity.png"
            alt="creativity"
            className="object-cover mx-auto mp:w-[60px] mp:h-[60px] sm:w-[120px] sm:h-[120px] xl:w-[188px] xl:h-[188px]"
          />
          <h1 className="mt-10 font-bold text-tango-500 sm:text-2xl md:text-4xl lg:text-5xl">
            Creative
          </h1>
          <h2 className="mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl">
            <b>in our approach</b>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
