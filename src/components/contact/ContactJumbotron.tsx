/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */

const ContactJumbotron = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0"></div>
      <img
        src="/assets/images/home/jumbotron.png"
        className="hidden object-cover w-full h-full sm:block"
      />
      <img
        src="/assets/images/home/jumbotron_mobile.png"
        className="block object-cover w-full h-full sm:hidden"
      />
      <div className="flex inset-0 items-center lg:absolute lg:justify-end lg:px-[50px] xl:px-[100px]">
        <div className="justify-center text-black lg:flex lg:justify-end lg:items-center lg:text-white">
          <div className="text-center lg:pt-16 lg:max-w-[40%]">
            <div>
              <h1 className="px-10 pt-4 font-bold text-white bg-secondary mp:text-[22px] sm:px-[50px] sm:text-2xl md:text-4xl lg:relative lg:p-0 lg:text-[30px] lg:text-left lg:bg-transparent xl:text-[40px] mp:text-">
                Contact us
              </h1>
            </div>
            <div className="p-5 text-white bg-secondary lg:p-0 lg:bg-transparent">
              <h2 className="mp:text-[20px] sm:text-[20px] md:text-[28px] lg:text-2xl lg:text-left xl:text-[30px]">
                Don’t hesitate to get in contact with us
              </h2>
            </div>
            <div>
              <p className="mp:p-4 mp:text-base sm:p-8 sm:text-base md:text-2xl lg:p-0 lg:text-base lg:leading-relaxed lg:text-left xl:text-[20px]">
                Whether it’s a demo of our technology or a discussion around
                best advertising channels, we are here to help and to educate.
                Don’t hesitate to get in contact with us.
              </p>
            </div>
            <div className="flex justify-center mb-8 sm:text-xl lg:justify-start lg:py-8">
              <button className="py-3 px-4 font-bold text-center text-white bg-secondary rounded-full focus:outline-none focus:ring shadow md:px-12 text-rose-600 hover:text-rose-700 active:text-rose-500">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactJumbotron;
