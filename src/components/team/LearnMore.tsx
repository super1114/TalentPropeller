/* eslint-disable prettier/prettier */
const LearnMore = () => {
  return (
    <div className="flex flex-col-reverse bg-white lg:grid lg:grid-cols-2">
      <div className="p-16 m-auto text-white md:flex-1">
        <h1 className="text-2xl text-center text-tango-500 sm:text-3xl sm:text-left">
          <b>Learn more about joining our amazing team</b>
        </h1>
        <div className="flex justify-center sm:justify-start">
          <button className="py-2 px-20 mt-10 text-xl text-white hover:text-tango-500 bg-tango-500 hover:bg-white rounded-full border-2 hover:border-tango-500 drop-shadow-lg duration-300">
            Career
          </button>
        </div>
      </div>
      <div className="mx-auto w-2/3 md:flex-1">
        <img
          src="/assets/images/team/team3.png"
          alt="team3"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LearnMore;
