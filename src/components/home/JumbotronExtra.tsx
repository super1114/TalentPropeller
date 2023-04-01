/* eslint-disable prettier/prettier */

const JumbotronExtra = () => {
  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-2">
      <div className="block sm:hidden">
        <img
          src="/assets/images/home/jumbotron-extra-mobile.png"
          alt="jumbotron-extra"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5 mp:px-5 sm:px-10 sm:text-primary lg:flex lg:relative lg:p-[76px] xl:p-16">
        <div className="flex flex-col">
          <h1 className="font-bold text-secondary-grey mp:text-[18px] mp:text-center sm:text-3xl sm:text-center lg:text-4xl xl:text-5xl">
            Three ways we help you solve your talent challenges:
          </h1>
          <div className="flex items-center mt-8">
            <img
              src="/assets/images/home/TP Mobile - Service - Hope.png"
              alt="megaphone-icon"
              className="object-cover w-[72px] h-[72px] sm:w-[144px] sm:h-[144px]"
            />
            <div className="ml-8">
              <h2 className="sm:text-2xl lg:text-2xl xl:text-4xl">
                Innovative, cost-effective advertising strategies that work
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              src="/assets/images/home/TP Mobile - Service - Seek.png"
              alt="shortlist-icon"
              className="object-cover w-[72px] h-[72px] sm:w-[144px] sm:h-[144px]"
            />
            <div className="ml-8">
              <h2 className="sm:text-2xl lg:text-2xl xl:text-4xl">
                Shortlist faster with no placement fees
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              src="/assets/images/home/TP Mobile - Service - Copy.png"
              alt="skilltest-icon"
              className="object-cover w-[72px] h-[72px] sm:w-[144px] sm:h-[144px]"
            />
            <div className="ml-8">
              <h2 className="sm:text-2xl lg:text-2xl xl:text-4xl">
                Advanced skills testing options
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <img
          src="/assets/images/home/jumbotron-extra.png"
          alt="jumbotron-extra"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default JumbotronExtra;
