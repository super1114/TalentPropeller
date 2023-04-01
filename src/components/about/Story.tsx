const Story = () => {
  return (
    <section>
      <div className="grid grid-cols-1 text-white bg-[#5c5c5c] lg:grid-cols-2">
        <div className="block lg:hidden">
          <img
            src="/assets/images/about/bigsplash-230.jpg"
            alt="bigsplash-230.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center p-5 text-center lg:text-left lg:p-12">
          <h1 className="text-2xl font-extrabold lg:text-2xl">Our story</h1>
          <p className="py-4 text-xl text-gray">
            Sharon and Victoria have been mates for 17 years. Our paths crossed
            in Melbourne in the early days of Talent Propeller establishing
            their office there and we have never looked back.
          </p>
          <p className="py-4 text-xl text-gray">
            You could say it was love at first sight (no, we aren’t dating).
          </p>
          <p className="py-4 text-xl text-gray">
            Victoria now manages our Australian operation and Sharon oversees
            New Zealand. Some call us the dynamic duo, others find creative ways
            to highlight our talents, but whatever people say, we are proud that
            we’ve carved an international business between the two of us.
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/images/about/bigsplash-230.jpg"
            alt="bigsplash-230.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 text-white bg-[#5c5c5c] lg:grid-cols-2">
        <div>
          <img
            src="/assets/images/about/bigsplash-146.jpg"
            alt="bigsplash-146.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center p-5 text-center lg:text-left lg:p-12">
          <h1 className="text-2xl font-extrabold lg:text-2xl">
            It hasn’t always been an easy road.
          </h1>
          <p className="py-4 text-xl text-gray">
            We were just two women getting amongst it, eager to shake things up
            and offer something new and different in the recruitment space.
          </p>
          <p className="py-4 text-xl text-gray">
            Two confident, outspoken females didn’t go unnoticed, especially
            when playing in a man’s media world. Undeterred, we’ve pushed
            forward and stand proudly where we are today, with a business in
            three locations (Melbourne, Auckland, Queenstown), working with over
            200 businesses to ensure they hire quickly, efficiently and
            successfully.
          </p>
          <p className="py-4 text-xl text-gray">
            We’ve got a lot of accolades under our belt, but you won’t find us
            shouting those from the rafters.
          </p>
          <p className="py-4 text-xl text-gray">
            <i>We feel our work speaks for itself.</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
