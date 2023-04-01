/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const PropellerServices = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row w-full h-full">
        <div className="relative">
          <button className="absolute text-2xl">
            <AiOutlineLeft />
          </button>
        </div>
        <div className="w-full">
          <h1 className="pt-12 pb-8 text-2xl text-center text-primary">
            Talent Propeller Services
          </h1>
          <div className="flex flex-row justify-between w-full">
            <div className=" w-[100px] h-[100px] bg-secondary"></div>
          </div>
        </div>
        <div>
          <button>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropellerServices;
