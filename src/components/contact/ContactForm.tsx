import React from 'react';

const ContactForm = () => {
  return (
    <div className="inset-x-0 p-10 bg-white lg:absolute">
      <h1 className="text-2xl text-tango-500">How can we help?</h1>
      <div className="mt-8 max-w-xl">
        <div className="grid grid-cols-1 gap-6">
          <label className="block text-xl text-[#5c5c5c]">
            <select
              defaultValue={1}
              className="block p-4 w-full rounded-lg border-2 border-[#5c5c5c] focus:ring shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity/50"
            >
              <option key={1}>Select one...</option>
              <option key={2}>Wedding</option>
              <option key={3}>Birthday</option>
              <option key={4}>Other</option>
            </select>
          </label>
          <label className="block">
            <input
              type="text"
              className="block p-4 w-full rounded-lg border-2 border-[#5c5c5c] focus:ring shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity/50"
              placeholder="Full Name"
            />
          </label>
          <label className="block">
            <input
              type="email"
              className="block p-4 w-full rounded-lg border-2 border-[#5c5c5c] focus:ring shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity/50"
              placeholder="Email"
            />
          </label>
          {/* <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input
              type="date"
              className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 shadow-sm focus:ring-opacity/50"
            />
          </label> */}
          <label className="block">
            <textarea
              className="block p-4 w-full rounded-lg border-2 border-[#5c5c5c] focus:ring shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity/50"
              rows={5}
              placeholder="Message"
            />
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 focus:ring focus:ring-offset-0 shadow-sm text-indigo-600 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity/50"
                    defaultChecked
                  />
                  <span className="ml-2">
                    Receive updates from TalentPropeller
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="block font-bold text-white">
            <button className="block p-2 w-full bg-tango-500 rounded-full shadow-sm hover:bg-amber-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
