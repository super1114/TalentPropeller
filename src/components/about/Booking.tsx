const Booking = () => {
  return (
    <section
      className="overflow-hidden relative bg-center bg-no-repeat bg-cover md:bg-right"
      style={{
        backgroundImage: `url('/assets/images/about/bigsplash-335-sml-extended-dark.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="py-32 px-16 text-tango-500 md:w-1/2 md:max-w-full">
        <h2 className="right-5 bottom-5 pt-4 text-2xl lg:text-3xl">
          <b>
            If you’re looking for honest, transparent, and progressive
            recruitment support, get in contact with us.
          </b>
        </h2>
        <button className="py-2 px-8 m-5 text-xl text-white hover:text-gray-900 bg-tango-500 hover:bg-white rounded-full drop-shadow-lg duration-300">
          Book a time to meet us
        </button>
      </div>
    </section>
  );
};

export default Booking;
