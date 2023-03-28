import Link from 'next/link';

const BlogList = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="py-24 bg-[#2e2e2e]">
      <h1 className="text-5xl text-center text-white">Recruiment Blog</h1>
      <div className="grid grid-cols-1 gap-6 p-24 lg:grid-cols-2 xl:grid-cols-3">
        {Array.isArray(blogs) &&
          blogs.map((blog, i) => (
            <div
              key={i}
              className="grid grid-rows-[min-content_min-content_1fr_min-content] gap-[30px] p-[25px_36px] bg-secondary-grey"
            >
              <label className="text-[12px] text-gray-500 md:text-[15px] lg:text-[22px]">
                Social Media
              </label>
              <h1 className="leading-none text-left text-tango-500 md:text-[26px] lg:text-[36px] text-20px">
                {blog.title}
              </h1>
              <p className=" text-white">{blog.headline}</p>
              <Link href={'/blog/[id]'} as={`/blog/${blog.id}`}>
                <a className="flex justify-end text-primary no-underline border-none">
                  Read more &rarr;
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
