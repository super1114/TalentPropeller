import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Member = ({
  memberInfo,
  handleViewMember,
}: {
  memberInfo: any;
  handleViewMember: any;
}) => {
  return (
    <div className="items-center py-16 px-8 m-auto text-center hover:border-2 hover:border-tango-500 shadow-2xl">
      <img
        src="/assets/images/team/member2.png"
        alt="member-card"
        className="items-center mx-auto mb-10 rounded-full border-2 border-tango-500"
      />
      <label className="text-2xl text-center">First Lastname</label>
      <div className="my-10">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </span>
        <span className="text-primary">
          <button
            className="py-2 px-4 text-primary rounded-md"
            type="button"
            onClick={() => handleViewMember(memberInfo)}
          >
            ... more
          </button>
        </span>
      </div>
      <h5 className="my-10 font-bold">
        <i>Creative Director</i>
      </h5>
      <div className="flex justify-center items-center">
        <FaFacebookF
          size={24}
          className="mx-3 text-white bg-tango-500 rounded-full border hover:border-2 hover:border-solid hover:border-slate-800"
        />
        <FaLinkedinIn
          size={24}
          className="mx-3 text-white bg-tango-500 rounded-full border hover:border-2 hover:border-solid hover:border-slate-800"
        />
      </div>
    </div>
  );
};

export default Member;
