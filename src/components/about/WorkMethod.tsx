const WorkMethod = () => {
  return (
    <div className="p-8 text-center text-white bg-[#2e2e2e] sm:p-12 md:p-16 xl:p-24">
      <div>
        <h1 className="font-bold mp:text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
          How we work with our clients
        </h1>
      </div>
      <div className="grid grid-cols-1 mb-8 md:grid-cols-2 md:mx-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex items-center mp:py-2 sm:py-4 lg:py-6 xl:py-10">
          <img
            src="/assets/images/about/check-mark.png"
            alt="check"
            className="object-cover mr-5 w-[12px] mp:w-[18px] sm:w-[32px] lg:w-[42px] xl:w-[50px]"
          />
          <h1 className="mp:text-xl sm:text-[24px] lg:text-[26px] xl:text-[30px]">
            Honest
          </h1>
        </div>
        <div className="flex items-center mp:py-2 sm:py-4 lg:py-6 xl:py-10">
          <img
            src="/assets/images/about/check-mark.png"
            alt="check"
            className="object-cover mr-5 w-[12px] mp:w-[18px] sm:w-[32px] lg:w-[42px] xl:w-[50px]"
          />
          <h1 className="mp:text-xl sm:text-[24px] lg:text-[26px] xl:text-[30px]">
            Professional
          </h1>
        </div>
        <div className="flex items-center mp:py-2 sm:py-4 lg:py-6 xl:py-10">
          <img
            src="/assets/images/about/check-mark.png"
            alt="check"
            className="object-cover mr-5 w-[12px] mp:w-[18px] sm:w-[32px] lg:w-[42px] xl:w-[50px]"
          />
          <h1 className="mp:text-xl sm:text-[24px] lg:text-[26px] xl:text-[30px]">
            Transparent
          </h1>
        </div>
        <div className="flex items-center mp:py-2 sm:py-4 lg:py-6 xl:py-10">
          <img
            src="/assets/images/about/check-mark.png"
            alt="check"
            className="object-cover mr-5 w-[12px] mp:w-[18px] sm:w-[32px] lg:w-[42px] xl:w-[50px]"
          />
          <h1 className="mp:text-xl sm:text-[24px] lg:text-[26px] xl:text-[30px]">
            Innovative
          </h1>
        </div>
      </div>
      <div className="relative mp:p-4 sm:p-10 xl:p-20 m-auto w-[100%] bg-[#5c5c5c]">
        <p className="mp:text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
          Talent Propeller has streamlined our recruitment process and is a
          cost-effective and invaluable tool for our business.
        </p>
        <div className="absolute top-[-30px] left-[calc(50%-20px)]">
          <img
            src="/assets/images/about/check.png"
            alt="check"
            className="object-cover w-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkMethod;
