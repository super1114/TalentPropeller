const ServiceJumbotron = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0"></div>
      <img
        src="/assets/images/services/TP Website - Contact - Main Masthead.jpg"
        className="hidden object-cover w-full h-full sm:block"
      />
      <img
        src="/assets/images/services/TP Mobile - Contact - Main Masthead.jpg"
        className="block object-cover w-full h-full sm:hidden"
      />
      <div className="flex inset-0 items-center lg:absolute z-10 lg:justify-end lg:px-[50px] xl:px-[100px]">
        <div className="justify-center text-black lg:flex lg:justify-end lg:items-center lg:text-white">
          <div className="text-center lg:pt-16 lg:max-w-[40%]">
            <div>
              <h1 className="px-10 pt-4 font-bold text-white bg-secondary mp:text-[22px] sm:px-[50px] sm:text-2xl md:text-4xl  lg:p-0 lg:text-[30px] lg:text-left lg:bg-transparent xl:text-[40px] mp:text-">
                It’s all part of a strategy
              </h1>
            </div>
            <div className="p-5 text-white bg-secondary lg:p-0 lg:bg-transparent">
              <h2 className="mp:text-[20px] sm:text-[20px] md:text-[28px] lg:text-2xl lg:text-left xl:text-[30px]">
                We are committed to helping you attract the right talent for
                your business.
              </h2>
            </div>
            <div>
              <p className="mp:p-4 mp:text-base sm:p-8 sm:text-base md:text-2xl lg:p-0 lg:text-base lg:leading-relaxed lg:text-left xl:text-[20px]">
                Here you’ll find the range of services we provide as part of an
                overall recruitment strategy. Read on to discover all the things
                we can do to help you achieve your recruitment goals.
              </p>
            </div>
            <div className="flex flex-col mb-8 items-center lg:py-8 lg:flex-row gap-5">
              <div className="flex w-full text-center">
                <span className="w-full text-center text-xl font-bold text-secondary-grey pb-5 lg:pb-0 lg:text-sm lg:text-left lg:text-white">
                  Explore our services
                </span>
              </div>
              <div>
                <select className="text-white text-sm bg-primary rounded-full text-center w-full lg:1/3 py-2 px-2">
                  <option value="none">Employer Branding</option>
                  <option value="Advertising Strategy">
                    Advertising Strategy
                  </option>
                  <option value="Candidate Management Technology">
                    Candidate Management Technology
                  </option>
                  <option value="Candidate Journey">Candidate Journey</option>
                  <option value="Copywriting">Copywriting</option>
                  <option value="Design/ Video Production">
                    Design/ Video Production
                  </option>
                  <option value="Advertising Strategy">
                    Advertising Strategy
                  </option>
                  <option value="Employment Branding">
                    Employment Branding
                  </option>
                  <option value="Advertising Strategy">
                    Advertising Strategy
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceJumbotron;
