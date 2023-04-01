/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable jsx-a11y/alt-text */

const TeamJumbotron = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
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
      <div className="flex inset-0 items-center sm:absolute sm:justify-end sm:px-[50px] lg:px-[100px]">
        <div
          className="text-black justify-center text-center lg:flex lg:items-center
        lg:text-[10px] md:text-[30px] sm:justify-end sm:text-white"
        >
          <div className="text-center xl:max-w-[40%]">
            <div>
              <h1 className="py-8 px-[50px] text-3xl font-bold text-white bg-secondary sm:relative sm:p-0 sm:text-left sm:bg-transparent md:text-[40px]">
                Meet our team
              </h1>
            </div>
            <div className="p-5 text-white bg-secondary sm:p-0 sm:bg-transparent sm:bg-inherit">
              <h2 className="text-[20px] sm:text-left md:text-[30px]">
                Get to know us, and our best friends
              </h2>
            </div>
            <div>
              <p className="p-8 mt-4 sm:p-0 sm:text-base sm:leading-relaxed sm:text-left md:text-[20px]">
                Our team is diverse and includes recruitment experts,
                advertising gurus, graphic designers, copywriters and technology
                developers. This unique combination of talent enables us to
                create our mix of human services and technology to reinvent the
                recruitment process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamJumbotron;
