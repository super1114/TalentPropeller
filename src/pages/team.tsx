import { useState } from 'react';

import { Modal } from '@/components/modal';
import Collegues from '@/components/team/Collegues';
import Member from '@/components/team/Member';
import TeamJumbotron from '@/components/team/TeamJumbotron';
import Meta from '@/layout/Meta';

const Team: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMemberInfo, setViewMemberInfo] = useState<any>();

  return (
    <div className="text-center">
      <Meta title="Talent Propeller - Team" />
      <TeamJumbotron />
      <h1 className="pt-24 text-5xl font-bold text-tango-500">
        Meet our ambitious and talented team
      </h1>
      <div className="grid gap-12 p-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <Member
          handleViewMember={() => setViewMemberInfo({ abcd: 1234 })}
        /> */}
        <Member
          memberInfo={'abcd'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />

        <Member
          memberInfo={'bcdf'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />
        <Member
          memberInfo={'bcdf'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />
        <Member
          memberInfo={'bcdf'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />
        <Member
          memberInfo={'bcdf'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />
        <Member
          memberInfo={'bcdf'}
          handleViewMember={(memberInfo: any) => {
            setViewMemberInfo(memberInfo);
            setIsOpen(true);
          }}
        />
        {/* <Member />
        <Member />
        <Member />
        <Member />
        <Member /> */}
      </div>
      <Collegues />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
        <div className="w-[40vw] min-h-[80vh] bg-secondary-grey">
          <div className="bg-white">View Membership {viewMemberInfo}</div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Team;
