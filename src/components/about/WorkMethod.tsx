const WorkMethod = () => {
  return (
    <div className="items-center p-32 text-center text-white bg-[#2e2e2e]">
      <h1 className="text-5xl font-bold">How we work with our clients</h1>
      <div className="">
        <div className="grid my-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center py-5">
            <img
              src="/assets/images/about/check-mark.png"
              alt="check"
              className="flex mr-5 w-[40px]"
            />
            <h1 className="items-center text-2xl">Honest</h1>
          </div>
          <div className="flex items-center py-5">
            <img
              src="/assets/images/about/check-mark.png"
              alt="check"
              className="flex mr-5 w-[40px]"
            />
            <h1 className="items-center text-2xl">Professional</h1>
          </div>
          <div className="flex items-center py-5">
            <img
              src="/assets/images/about/check-mark.png"
              alt="check"
              className="flex mr-5 w-[40px]"
            />
            <h1 className="items-center text-2xl">Transparent</h1>
          </div>
          <div className="flex items-center py-5">
            <img
              src="/assets/images/about/check-mark.png"
              alt="check"
              className="flex mr-5 w-[40px]"
            />
            <h1 className="items-center text-2xl">Innovative</h1>
          </div>
        </div>
        <div className="relative p-16 m-auto w-2/3 bg-[#5c5c5c]">
          <p className="text-3xl font-extrabold">
            Talent Propeller has streamlined our recruitment process and is a
            cost-effective and invaluable tool for our business.
          </p>
          <div className="absolute top-[-30px] left-[calc(50%-30px)]">
            <img
              src="/assets/images/about/check.png"
              style={{ width: '60px' }}
              alt="check"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkMethod;
