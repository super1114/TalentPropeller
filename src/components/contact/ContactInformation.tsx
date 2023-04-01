/* eslint-disable prettier/prettier */
import React from "react";

import ContactForm from "./ContactForm";

const ContactInformation = () => {
  return (
    <div className="">
      <div className="flex flex-col mp:px-4 sm:px-5 md:py-8 md:px-12 lg:flex-row xl:py-12 xl:px-24">
        <div className="flex-1">
          <h1 className="font-bold text-center text-tango-500 mp:text-2xl sm:text-2xl md:text-3xl lg:text-2xl lg:text-left xl:pb-0 xl:text-3xl">
            Book a Time To Discuss Your Recruiment Challenges
          </h1>
          <p className="py-5 text-base sm:text-2xl">
            Contact our friendly marketing team to discuss our campaign booking
            process and get your campaign up and running today!
          </p>
          <div className="hidden h-[400px] sm:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9648464634865!2d144.9963996153187!3d-37.81429237975221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642fa144e6e09%3A0xd865e9c083e34b2!2s3%20Bromham%20Pl%2C%20Richmond%20VIC%203121%2C%20Australia!5e0!3m2!1sen!2sjp!4v1679950552573!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="hidden flex-1 sm:block lg:relative">
          <ContactForm />
        </div>
      </div>
      <div className="block sm:hidden">
        <ContactForm />
      </div>
      <div className="grid grid-cols-1 text-white bg-[#2e2e2e] sm:grid-cols-2 sm:p-12 md:grid-cols-4 lg:grid-cols-5">
        {/* <div className="flex  gap-6 text-center text-white sm:flex-row "> */}
        <div className="block mt-[-70px] h-[400px] mp:p-12 sm:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9648464634865!2d144.9963996153187!3d-37.81429237975221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642fa144e6e09%3A0xd865e9c083e34b2!2s3%20Bromham%20Pl%2C%20Richmond%20VIC%203121%2C%20Australia!5e0!3m2!1sen!2sjp!4v1679950552573!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="pb-8 text-left mp:px-8 sm:pb-0 md:text-left xl:pb-0">
          <h3 className="pb-3 text-xl">Melbourne</h3>
          <div className="flex items-center pb-3">
            <img
              src="/assets/images/contact/icon - phone.png"
              alt="phone-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">03 9691 4777</span>
          </div>
          <div className="flex items-start pb-3">
            <img
              src="/assets/images/contact/icon - location.png"
              alt="location-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">
              1/3 Bromham Place Richmond VIC 3121 Australia
            </span>
          </div>
        </div>
        <div className="pb-8 text-left mp:px-8 sm:pb-0 md:text-left xl:pb-0">
          <h3 className="pb-3 text-xl">Auckland</h3>
          <div className="flex items-center pb-3">
            <img
              src="/assets/images/contact/icon - phone.png"
              alt="phone-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">09 950 2130</span>
          </div>
          <div className="flex items-start pb-3">
            <img
              src="/assets/images/contact/icon - location.png"
              alt="location-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">
              2 Kitchener Street Auckland CBD 1010 New Zealand
            </span>
          </div>
        </div>
        <div className="pb-8 text-left mp:px-8 sm:pb-0 md:text-left xl:pb-0">
          <h3 className="pb-3 text-xl">Queenstown</h3>
          <div className="flex items-center pb-3">
            <img
              src="/assets/images/contact/icon - phone.png"
              alt="phone-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">03 244 9580</span>
          </div>
          <div className="flex items-start pb-3">
            <img
              src="/assets/images/contact/icon - location.png"
              alt="location-icon"
              className="object-cover w-[18px]"
            />
            <span className="pl-2">
              69 Buckingham Street Arrowtown Queenstown 9302 New Zealand
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactInformation;
