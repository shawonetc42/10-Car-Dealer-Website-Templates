import React from "react";

function HomeFeatures() {
  return (
    <div className="relative flex overflow-hidden flex-col justify-center items-center px-6 py-8 md:px-16 md:py-20 text-base ">
      {/* background */}
      <img
        loading="lazy"
        src="car2.jpg"
        className="object-cover absolute inset-0 w-full h-full transition-transform transition-filter duration-500 ease-in-out transform hover:rotate-3 hover:grayscale-0 grayscale filter brightness-90 hover:brightness-100"
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
        <div className="flex flex-wrap gap-4 justify-end py-2.5 pr-2.5 pl-6 text-base bg-white rounded-xl  md:rounded-[60px] max-md:pl-4 max-md:flex-col max-md:gap-2 max-md:py-4">
          <div className="flex flex-auto gap-4 my-auto leading-[187%] text-slate-950 max-md:flex-col max-md:gap-2 max-md:w-full">
            <div className="flex gap-4 justify-center px-6 py-2 border-r border-gray-200 max-md:px-4 max-md:border-r-0 max-md:border-b max-md:w-full max-md:justify-start max-md:py-2">
              <div>Any Makes</div>
            </div>
            <div className="flex gap-4 justify-center px-6 py-2 border-r border-gray-200 max-md:px-4 max-md:border-r-0 max-md:border-b max-md:w-full max-md:justify-start max-md:py-2">
              <div>Any Models</div>
            </div>
            <div className="my-auto capitalize leading-[185%] max-md:leading-[160%] max-md:w-full max-md:text-left max-md:py-2 max-md:border-b max-md:border-gray-200">
              Prices:
            </div>
          </div>
          <div className="flex flex-auto items-center gap-4 justify-between max-md:flex-col max-md:gap-2 max-md:w-full">
            <div className="my-auto capitalize leading-[240%] text-slate-950 max-md:leading-[160%] max-md:w-full max-md:text-left max-md:py-2">
              All Prices
            </div>
            <div className="flex gap-3 px-10 py-3 font-medium text-center text-white bg-indigo-500 border border-blue-600 leading-[185%] rounded-[60px] max-md:px-4 max-md:py-2 max-md:w-full max-md:justify-center">
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
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 12l1-2h4l1-2h6l1 2h4l1 2h2v2h-1v4h1v2h-2v-1h-16v1h-2v-2h1v-4h-1v-2h2zm2 0h14l-1 2h-12l-1-2zm10-4h-8l-1 2h10l-1-2zm-6 12h4v-2h-4v2z" />
            </svg>
            <div>Hatchback</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 14h16v2h1v2h-2v-2h-14v2h-2v-2h1v-2zm2 0v-4h12v4h-12zm10 0h-8v-2h8v2zm-6-6h4v2h-4v-2z" />
            </svg>
            <div>Sedan</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 12h2l1-2h4l1-2h4l1 2h4l1 2h2v6h-1v4h-2v-1h-16v1h-2v-4h1v-6zm18 0h-14l-1 2h16l-1-2zm-2-4h-10l-1 2h12l-1-2zm-8 12h4v-2h-4v2z" />
            </svg>
            <div>SUV</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 11h2l1-2h4l1-2h4l1 2h4l1 2h2v6h-1v4h-2v-1h-16v1h-2v-4h1v-6zm18 0h-14l-1 2h16l-1-2zm-2-4h-10l-1 2h12l-1-2zm-8 12h4v-2h-4v2z" />
            </svg>
            <div>Coupe</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <svg
              className="w-6 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 11h2l1-2h4l1-2h4l1 2h4l1 2h2v6h-1v4h-2v-1h-16v1h-2v-4h1v-6zm18 0h-14l-1 2h16l-1-2zm-2-4h-10l-1 2h12l-1-2zm-8 12h4v-2h-4v2z" />
            </svg>
            <div>Convertible</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
