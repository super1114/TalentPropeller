const CareersJumbotron = () => {
  return (
    <div
      className="overflow-hidden relative bg-right bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/career/masthead - header.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="float-left relative py-32 px-16 mx-auto max-w-screen-xl text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
        <div className="max-w-xl">
          <h1 className="text-5xl">
            <b>Join an ambitious and talented team</b>
          </h1>
          <h2 className="right-5 bottom-5 py-5 text-3xl">
            Be supported to go anywhere.
          </h2>
          <p className="text-xl">
            We genuinely believe that the opportunities here are endless. When
            you start here, you can go anywhere. We work as a team, we get
            involved, roll up our sleeves and make things happen. When we put
            our minds to something, there is no stopping us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersJumbotron;
