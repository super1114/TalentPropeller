/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable jsx-a11y/alt-text */

// const Booking = () => {
//   return (
//     // eslint-disable-next-line tailwindcss/no-contradicting-classname
//     <section className="relative w-full">
//       <div className="absolute inset-0"></div>
//       <div className="hidden lg:block">
//         <img
//           src="/assets/images/about/bigsplash-335-sml-extended-dark.jpg"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="block lg:hidden">
//         <img
//           src="/assets/images/about/bigsplash-335-sml-extended-dark-mobile.jpg"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="flex inset-0 items-center px-[20px] w-full sm:absolute sm:w-2/3 md:justify-start md:px-[50px] lg:px-[100px]">
//         <div className="py-5 text-tango-500">
//           <div className="text-center sm:text-left">
//             <h2 className="mt-4 text-[16px] md:text-[20px] lg:text-[30px]">
//               If you’re looking for honest, transparent, and progressive
//               recruitment support, get in contact with us.
//             </h2>
//             <div className="flex justify-center mt-4 w-full sm:justify-start">
//               <button className="block py-3 px-4 text-base font-bold text-center text-white hover:text-gray-900 bg-tango-500 hover:bg-white rounded-full focus:outline-none focus:ring shadow sm:w-auto md:px-12 text-rose-600 hover:text-rose-700 active:text-rose-500">
//                 Book a time to meet us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Booking;

/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */

const Booking = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0"></div>
      <img
        src="/assets/images/about/bigsplash-335-sml-extended-dark.jpg"
        className="hidden object-cover w-full h-full sm:block"
      />
      <img
        src="/assets/images/about/bigsplash-335-sml-extended-dark-mobile.jpg"
        className="block object-cover w-full h-full sm:hidden"
      />
      <div className="flex inset-0 items-center lg:absolute lg:justify-start lg:px-[50px] xl:px-[100px]">
        <div className="justify-center text-black lg:flex lg:justify-start lg:items-center lg:text-white">
          <div className="text-center lg:pt-16 lg:max-w-[40%]">
            <div>
              <p className="text-primary mp:p-4 mp:text-xl sm:p-8 sm:text-xl md:text-2xl lg:p-0 lg:text-2xl lg:leading-relaxed lg:text-left xl:text-3xl">
                If you’re looking for honest, transparent, and progressive
                recruitment support, get in contact with us.
              </p>
            </div>
            <div className="flex justify-center mb-8 lg:justify-start lg:py-8">
              <button className="py-3 px-4 font-bold text-center text-white bg-secondary rounded-full focus:outline-none focus:ring shadow mp:text-sm sm:text-xl md:px-12 text-rose-600 hover:text-rose-700 active:text-rose-500">
                Book a time to meet us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
