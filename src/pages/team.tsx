/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
import React, { useState, useEffect } from "react";

// import { Modal } from '@/components/modal';
import Modal from "@/components/modal/modal";
import Collegues from "@/components/team/Collegues";
import Member from "@/components/team/Member";
import TeamJumbotron from "../components/team/TeamJumbotron";
import Partnership from "../components/home/Partnership";
import LearnMore from "@/components/team/LearnMore";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Meta from "@/layout/Meta";

const Team: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMemberInfo, setViewMemberInfo] = useState<any>();
  const [members, setMembers] = useState<any>({
    info: "789789789",
    name: "qqqq",
  });
  const handleViewMember = (memberInfo: any): any => {
    setViewMemberInfo(memberInfo);
    setIsOpen(true);
  };

  useEffect(() => {
    setMembers([
      { info: "789789789", name: "qqqq" },
      { info: "456456465", name: "wwww" },
      { info: "123123132", name: "eeee" },
      { info: "741741741", name: "rrrr" },
      { info: "852852852", name: "tttt" },
      { info: "963963963", name: "yyyy" },
    ]);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Meta title="Talent Propeller - Team" />
      <TeamJumbotron />
      <div>
        <h1 className="pt-24 mx-auto w-[80%] text-[36px] font-bold text-center text-tango-500 md:text-[48px]">
          Meet our ambitious and talented team
        </h1>
      </div>
      <div className="relative">
        <div className="w-full h-[600px] bg-white"></div>
        <div className="w-full h-[100px] bg-primary"></div>
        <div className="w-full h-[300px] bg-gray-700"></div>
        <div className="absolute inset-0 py-20 px-10">
          <div className="flex flex-row">
            <div className="relative mr-2 w-12 text-5xl text-center text-primary">
              <div className="flex absolute inset-x-0 top-[392px] justify-center items-center">
                <button className="w-12 h-12 hover:text-secondary hover:cursor-pointer">
                  <AiOutlineLeft />
                </button>
              </div>
            </div>
            <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} />
            <div className="relative ml-2 w-12 text-5xl text-center text-primary">
              <div className="flex absolute inset-x-0 top-[392px] justify-center items-center">
                <button className="w-12 h-12 hover:text-secondary hover:cursor-pointer">
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-10 w-full h-[40px]">
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="m-1 w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        {/* <div className="grid absolute inset gap-12 p-8 sm:grid-cols-1 sm:p-12 md:grid-cols-2 md:p-20 lg:grid-cols-3 lg:p-24">
          <div className="flex flex-row">
            <div className="w-full h-full relative text-5xl text-primary">
              <div>
                <button className="absolute inset-x-0 top-[300px]">
                  <AiOutlineLeft />
                </button>
              </div>
            </div>
            <Member memberInfo={"abcd"} handleViewMember={handleViewMember} />
            <div className="text-5xl text-primary">
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </div> */}
        {/* <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} />
          <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} />
          <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} />
          <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} />
          <Member memberInfo={"bcdf"} handleViewMember={handleViewMember} /> */}
        {/* </div> */}
      </div>
      <LearnMore />
      <Collegues />
      <Partnership />

      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
        <div className="w-[40vw] min-h-[80vh] bg-secondary-grey">
          <div className="bg-white">View Membership {viewMemberInfo}</div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </Modal> */}
      <Modal
        modalContent={viewMemberInfo}
        closeModal={closeModal}
        showModal={isOpen}
      />
    </div>
  );
};

export default Team;
