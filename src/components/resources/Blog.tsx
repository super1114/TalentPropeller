/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import Link from 'next/link';

const Blog = ({
  blogTitle,
  blogHeadline,
}: {
  blogTitle: string;
  blogHeadline: string;
  }) => {
  return (
    <div className="flex relative flex-col p-4 m-4 bg-secondary-grey">
      <label className="text-[12px] text-gray-500 md:text-[15px] lg:text-[22px]">
        Social Media
      </label>
      <h1 className="mb-[30px] leading-none text-left text-tango-500 md:text-[26px] lg:text-[36px] text-20px">
      { blogTitle }
      </h1>
      <p className="mb-[30px] text-white">
      { blogHeadline }
      </p>
      <Link href={'/blog/[id]'} as={`/blog/1`}>
        <a className="absolute right-[10px] bottom-[10px] text-primary no-underline border-none">
          Read more &rarr;
        </a>
      </Link>
    </div>
  );
};

export default Blog;
