const Story = () => {
  return (
    <section>
      <div className="flex flex-col-reverse text-white bg-[#5c5c5c] md:flex-row">
        <div className="flex-1 items-center p-12">
          <h1 className="text-3xl font-extrabold">Our story</h1>
          <p className="py-2 text-xl text-gray">
            Sharon and Victoria have been mates for 17 years. Our paths crossed
            in Melbourne in the early days of Talent Propeller establishing
            their office there and we have never looked back.
          </p>
          <p className="text-xl text-gray">
            You could say it was love at first sight (no, we aren’t dating).
          </p>
          <p className="py-2 text-xl text-gray">
            Victoria now manages our Australian operation and Sharon oversees
            New Zealand. Some call us the dynamic duo, others find creative ways
            to highlight our talents, but whatever people say, we are proud that
            we’ve carved an international business between the two of us.
          </p>
        </div>
        <div
          className="flex-1 py-64 px-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('/assets/images/about/bigsplash-230.jpg')`,
          }}
        ></div>
      </div>
      <div className="flex flex-col text-white bg-[#5c5c5c] md:flex-row">
        <div
          className="flex-1 py-64 px-12 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('/assets/images/about/bigsplash-146.jpg')`,
          }}
        ></div>
        <div className="flex-1 justify-between items-center p-12 m-auto text-xl text-gray">
          <p className="py-5">It hasn’t always been an easy road.</p>
          <p className="">
            We were just two women getting amongst it, eager to shake things up
            and offer something new and different in the recruitment space.
          </p>
          <p className="py-5">
            Two confident, outspoken females didn’t go unnoticed, especially
            when playing in a man’s media world. Undeterred, we’ve pushed
            forward and stand proudly where we are today, with a business in
            three locations (Melbourne, Auckland, Queenstown), working with over
            200 businesses to ensure they hire quickly, efficiently and
            successfully.
          </p>
          <p className="">
            We’ve got a lot of accolades under our belt, but you won’t find us
            shouting those from the rafters.
          </p>
          <p className="font-bold">
            <i>We feel our work speaks for itself.</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
