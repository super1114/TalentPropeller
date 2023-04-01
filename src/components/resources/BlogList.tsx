/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import Blog from "./Blog";

// const BlogList = ({ blogs }: { blogs: any[] }) => {
const BlogList = () => {
  return (
    <div className="py-24 bg-[#2e2e2e]">
      <h1 className="text-3xl text-center text-white sm:text-4xl md:text-5xl">
        Recruiment Blog
      </h1>
      {/* <div className="grid grid-cols-1 gap-6 p-24 lg:grid-cols-2 xl:grid-cols-3">
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
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Blog
          blogTitle="Leverage your Tiktok Presence"
          blogHeadline="Should you leverage the platform taking the world by storm in your recruitment strategy?"
        />
        <Blog
          blogTitle="Your employer branding strategy"
          blogHeadline="Lower application numbers, more competition for staff, and more candidates declining offers. The job market in 2022 is tough for employers."
        />
        <Blog
          blogTitle="Leverage your Tiktok Presence"
          blogHeadline="Should you leverage the platform taking the world by storm in your recruitment strategy?"
        />
        <Blog
          blogTitle="Your employer branding strategy"
          blogHeadline="Should you leverage the platform taking the world by storm in your recruitment strategy?"
        />
        <Blog
          blogTitle="Marketing Insights"
          blogHeadline="Normally at the start of a new year, we have a big picture, blue sky moment where we talk about predictions and look at the future of recruitment."
        />
        <Blog
          blogTitle="How to get free advertising"
          blogHeadline="If you have recently been surprised to find that your job advert is appearing on a website you didn’t authorise, you’re not alone."
        />
        <Blog
          blogTitle="How to get free advertising"
          blogHeadline="If you have recently been surprised to find that your job advert is appearing on a website you didn’t authorise, you’re not alone."
        />
        <Blog
          blogTitle="Reduce the risk of hiring the wrong person"
          blogHeadline="One of the things many managers dread about starting the recruitment process is making ‘the wrong decision’"
        />
        <Blog
          blogTitle="What we learnt in 2022"
          blogHeadline="2021 has been another heck of a year for business owners and those in positions of  responsibility that involve HR."
        />
      </div>
    </div>
  );
};

export default BlogList;
