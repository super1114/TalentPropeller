import React from 'react';

import ContactForm from './ContactForm';

const ContactInformation = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-6 py-12 px-24 lg:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-tango-500">
            Book a Time To Discuss
            <br />
            Your Recruiment Challenges
          </h1>
          <p>
            Contact our friendly marketing team to discuss our campaign booking
            <br />
            process and get your campaign up and running today!
          </p>
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9648464634865!2d144.9963996153187!3d-37.81429237975221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642fa144e6e09%3A0xd865e9c083e34b2!2s3%20Bromham%20Pl%2C%20Richmond%20VIC%203121%2C%20Australia!5e0!3m2!1sen!2sjp!4v1679950552573!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex-1 lg:relative">
          <ContactForm />
        </div>
      </div>
      <div className="flex py-12 px-24 bg-[#2e2e2e]">
        <div className="flex flex-1 gap-10 items-center text-center text-white">
          <div className="text-left">
            <h3 className="text-xl">Melbourne</h3>
            <div className="flex gap-2 items-center my-3">
              <img
                src="/assets/images/contact/icon - phone.png"
                alt="phone-icon"
                className="w-1/12"
              />
              <span>03 9691 4777</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/contact/icon - location.png"
                alt="location-icon"
                className="w-[18px]"
              />
              <span>
                1/3 Bromham Place
                <br /> Richmond
                <br /> VIC 3121
                <br /> Australia
              </span>
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-xl">Auckland</h3>
            <div className="flex gap-2 items-center my-3">
              <img
                src="/assets/images/contact/icon - phone.png"
                alt="phone-icon"
                className="w-1/12"
              />
              <span>09 950 2130</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/contact/icon - location.png"
                alt="location-icon"
                className="w-[18px]"
              />
              <span>
                2 Kitchener Street
                <br /> Auckland
                <br /> CBD 1010
                <br /> New Zealand
              </span>
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-xl">Queenstown</h3>
            <div className="flex gap-2 items-center my-3">
              <img
                src="/assets/images/contact/icon - phone.png"
                alt="phone-icon"
                className="w-1/12"
              />
              <span>03 244 9580</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/contact/icon - location.png"
                alt="location-icon"
                className="w-[18px]"
              />
              <span>
                69 Buckingham Street
                <br /> Arrowtown
                <br /> Queenstown 9302
                <br />
                New Zealand
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
