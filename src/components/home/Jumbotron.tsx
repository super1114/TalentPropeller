const Jumbotron = () => {
  return (
    <section
      className="overflow-hidden relative bg-left bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/home/jumbotron.png')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="float-right relative py-32 px-16 mx-auto max-w-screen-lg text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Looking for talent in
            <br /> all the wrong places?
          </h1>

          <h2 className="mt-4 text-xl sm:text-3xl">
            There’s a better way to find <br />
            talent for your business
          </h2>

          <p className="mt-4 max-w-md sm:text-base sm:leading-relaxed">
            At Talent Propeller, we understand that traditional recruitment
            processes just don’t cut it anymore in a competitive, post-Covid
            world, so we take a different approach - one thats disruptive,
            creative, and innovative
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-xl">
            <button className="block py-3 px-12 w-full text-lg font-bold text-center text-white bg-secondary rounded-full focus:outline-none focus:ring shadow sm:w-auto text-rose-600 hover:text-rose-700 active:text-rose-500">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
