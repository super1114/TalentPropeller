import React from 'react';

import Link from 'next/link';

const JobView = ({ job }: { job: TJobType }) => {
  // console.log(job);
  return (
    <div className="my-5">
      <div className="text-2xl text-tango-500">{job.title}</div>
      <div className="my-5 text-xl font-bold">
        {job.description}
        <Link href={'/job/[id]'} as={`/job/${job.id}`}>
          <a className="text-tango-500 no-underline border-none">
            {' '}
            more &rarr;
          </a>
        </Link>
      </div>
      <div className="mb-5">
        <button className="py-2 px-10 mx-5 w-64 text-xl text-white hover:text-gray-900 bg-tango-500 hover:bg-white rounded-full drop-shadow-lg duration-300">
          Full-time
        </button>
        <button className="py-2 px-8 mx-16 w-64 text-xl text-tango-500 hover:text-white bg-white hover:bg-tango-500 rounded-full border-2 border-tango-500 drop-shadow-lg duration-300">
          Staff Benefits
        </button>
      </div>
      <div className="mb-2">
        Location:{job.location} | Job Id: {job.id} | Closing Date:{' '}
        {job.closingDate}
      </div>
      <div className="h-[2px] bg-[#837e7e]"></div>
    </div>
  );
};
export default JobView;
