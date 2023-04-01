/* eslint-disable prettier/prettier */

const ServiceJumbotronExtra = () => {
  return (
    <section className="grid grid-cols-1 gap-0 bg-secondary xl:grid-cols-2">
      <div className="flex justify-center items-center mx-auto mt-[-100px] w-4/5 sm:hidden">
        <img
          src="/assets/images/services/TP Mobile - Service - 2016.jpg"
          alt="jumbotron-extra"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="items-center py-10 px-5 mx-auto max-w-screen-xl sm:py-24 sm:px-10 sm:text-primary lg:flex lg:relative">
        <div className="max-w-xl sm:pl-2 sm:text-left">
          <h1 className="text-3xl font-bold text-center text-white sm:text-4xl sm:text-left">
            Are you still recruiting like it's 2016?
          </h1>
          <div className="flex items-center mt-8">
            <img
              className="object-cover w-1/4 h-1/4"
              src="/assets/images/services/TP Mobile - Service.png"
              alt="megaphone-icon"
            />
            <div className="ml-8">
              <h2 className="text-[20px] text-white sm:text-3xl">
                Copy job description into an advert
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              className="object-cover w-1/4 h-1/4"
              src="/assets/images/services/TP Mobile - Service (4).png"
              alt="shortlist-icon"
            />
            <div className="ml-8">
              <h2 className="text-[20px] text-white sm:text-3xl">
                Post to Seek
              </h2>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <img
              className="object-cover w-1/4 h-1/4"
              src="/assets/images/services/TP Mobile - Service (3).png"
              alt="skilltest-icon"
            />
            <div className="ml-8">
              <h2 className="text-[20px] text-white sm:text-3xl">
                Hope for the best
              </h2>
            </div>
          </div>
          <div className="pt-10 w-full text-white">
            <p className="pb-3 w-full text-[20px] text-center">
              Sound simple right?
            </p>
            <p className="w-full text-[20px] text-center">
              So why isn't it working for you
            </p>
          </div>
        </div>
      </div>
      <div className="hidden w-full sm:block">
        <img
          src="/assets/images/services/TP Mobile - Service - 2016.jpg"
          alt="jumbotron-extra"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default ServiceJumbotronExtra;
