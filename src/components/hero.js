import React from "react";

function Hero() {
  return (
    <div className="relative flex overflow-hidden flex-col justify-center items-center px-6 py-8 md:px-16 md:py-20 text-base ">
      {/* background */}
      <img
        loading="lazy"
        src="bg.jpg"
        className="object-cover absolute inset-0 w-full h-full"
        alt="Background"
      />

      <div className="relative"></div>
      <div className="flex relative  flex-col items-center">
        <div className="text-base leading-4 text-center text-white">
          Find cars for sale and for rent near you
        </div>
        <div className="mt-6 md:mt-11 text-4xl font-bold text-center text-white leading-[70px]">
          Find Your Perfect Car
        </div>
        <div className="flex gap-3 justify-between mt-10 md:mt-14 text-base font-medium text-black whitespace-nowrap">
          <div>All</div>
          <div>New</div>
          <div>Used</div>
        </div>
        <div className="h-0.5 bg-white w-12 mt-3.5 md:mt-3.5" />
        {/* update */}
        <div className="flex flex-wrap gap-4 justify-end py-2.5 pr-2.5 pl-6 text-base bg-white rounded-[80px] max-md:pl-4">
          <div className="flex flex-auto gap-4 my-auto leading-[187%] text-slate-950 max-md:flex-wrap">
            <div className="flex gap-4 justify-center px-6 py-2 border-r border-gray-200 max-md:px-4">
              <div>Any Makes</div>
            </div>
            <div className="flex gap-4 justify-center px-6 py-2 border-r border-gray-200 max-md:px-4">
              <div>Any Models</div>
            </div>
            <div className="my-auto capitalize leading-[185%] max-md:leading-[160%]">
              Prices:
            </div>
          </div>
          <div className="flex flex-auto items-center gap-4 justify-between max-md:flex-wrap">
            <div className="my-auto capitalize leading-[240%] text-slate-950 max-md:leading-[160%]">
              All Prices
            </div>
            <div className="flex gap-3 px-10 py-3 font-medium text-center text-white bg-blue-600 border border-blue-600 leading-[185%] rounded-[60px] max-md:px-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f825e1cab4dbed39264d356509cd5f7bf9cc3a65cbe40da5b32de5a8c3eaa266?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                alt="Search Cars"
                className="aspect-square w-[15px]"
              />
              <div>Search Cars</div>
            </div>
          </div>
        </div>

        {/* end */}
        <div className="mt-8 text-center text-white md:mt-16">
          Or Browse Featured Model
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-5 font-medium text-white">
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
