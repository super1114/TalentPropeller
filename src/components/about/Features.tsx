const Features = () => {
  return (
    <div className="items-center py-16 px-36 lg:grid lg:grid-cols-3">
      <div className="items-center text-center">
        <img
          src="/assets/images/about/nuclear-explosion.png"
          alt="disruptive"
          className="m-auto w-2/6"
        />
        <h1 className="mt-10 text-5xl font-bold text-tango-500">Disruptive</h1>
        <h2 className="mt-4 text-2xl">
          <b>in our style</b>
        </h2>
      </div>
      <div className="items-center text-center">
        <img
          src="/assets/images/about/innovation.png"
          alt="innovation"
          className="m-auto w-2/6"
        />
        <h1 className="mt-10 text-5xl font-bold text-tango-500">Innovative</h1>
        <h2 className="mt-4 text-2xl">
          <b>in our attitude</b>
        </h2>
      </div>
      <div className="items-center text-center">
        <img
          src="/assets/images/about/creativity.png"
          alt="creativity"
          className="m-auto w-2/6"
        />
        <h1 className="mt-10 text-5xl font-bold text-tango-500">Creative</h1>
        <h2 className="mt-4 text-2xl">
          <b>in our approach</b>
        </h2>
      </div>
    </div>
  );
};

export default Features;
