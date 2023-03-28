import React from 'react';

const ContactJumbotron = () => {
  return (
    <section
      className="overflow-hidden relative bg-left bg-no-repeat bg-cover lg:bg-center"
      style={{
        backgroundImage: `url('/assets/images/contact/masthead - header.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="float-right relative py-32 px-16 mx-auto max-w-screen-lg text-white sm:px-6 lg:flex lg:items-center lg:px-32 lg:h-screen">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl font-bold">Contact us</h1>

          <h2 className="mt-12 text-3xl">
            Let us show you how we can improve your recruitment strategy.
          </h2>

          <p className="mt-12 max-w-md text-xl sm:leading-relaxed">
            Whether it&apos;s a demo of our technology or a discussion around
            best advertising channels, we are here to help and to educate.
            Don&apos;t hesitate to get in contact with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactJumbotron;
