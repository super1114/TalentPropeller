const AboutJumbotron = () => {
  return (
    <section
      className="overflow-hidden relative bg-left bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/about/first.png')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="float-right relative py-32 px-16 mx-auto max-w-screen-lg text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Black and white with
            <br /> a pop of fun
          </h1>

          <h2 className="mt-4 text-xl font-bold sm:text-3xl">
            Get to know the girls
            <br /> behind the brand
          </h2>

          <p className="mt-4 max-w-xl text-xl sm:leading-relaxed">
            Our attitude to how we work with clients is reflected in our website
            – direct advice, simplicity in our approach and transparency. Black
            and white. The orange is a pop of fun, laughter and delight, which
            there’s never a shortage of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutJumbotron;
