import React, { useState } from "react";

function Hero() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of cars to display per page
  const carsPerPage = 2;

  // Car data (dummy data for demonstration)
  const carData = [
    { name: "Toyota Camry", type: "New" },
    { name: "Honda Civic", type: "Used" },
    { name: "Ford Mustang", type: "New" },
    // Add more car data as needed
  ];

  // Function to handle search query change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  // Function to filter car data based on search query and pagination
  const filteredCars = carData
    .filter((car) => car.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);

  // Function to handle page change
 

  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-6 py-8 md:px-16 md:py-20 text-base min-h-[945px]">
      <img
        loading="lazy"
        src="bg.jpg"
        className="object-cover absolute inset-0 w-full h-full"
        alt="Background"
      />
      <div className="flex relative  flex-col items-center">
        <div className="text-base leading-4 text-center text-white">
          Find cars for sale and for rent near you
        </div>
        <div className="mt-6 md:mt-11 text-4xl font-bold text-center text-white leading-[70px]">
          Find Your Perfect Car
        </div>
        <div className="flex gap-3 justify-between mt-10 md:mt-14 text-base font-medium text-white whitespace-nowrap">
          <div>All</div>
          <div>New</div>
          <div>Used</div>
        </div>
        <div className="h-0.5 bg-white w-12 mt-3.5 md:mt-3.5" />
        {/* update */}
        <div className="container mt-10 md:mt-14 bg-white border border-gray-200 rounded-md shadow-md">
          <div className="flex items-center space-x-4 p-4">
            <button className="text-blue-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H5zM3 8a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2H3zm2 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border-none focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>

          {/* Display filtered car data */}
          <div className="px-4 ">
            {filteredCars.length === 0 ? (
              <div className="text-gray-600">No cars found.</div>
            ) : (
              <div>
                {filteredCars.map((car, index) => (
                  <div key={index} className="text-gray-600">
                    {car.name} - {car.type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* end */}
        <div className="mt-8 text-center text-white md:mt-16">
          Or Browse Featured Model
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-5 font-medium text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c19c2110e153b359d19e942d09c564309489ff81e45cc81cc60f9609d414e500?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200"
            className="w-24 h-9 rounded-lg sm:w-28 sm:h-10 md:w-32 md:h-12"
            alt="Car 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e47d38f61b9a9a5c15725e10123d9afef20ff309dc2681056f2175fd31084c1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200"
            className="w-24 h-9 rounded-lg sm:w-28 sm:h-10 md:w-32 md:h-12"
            alt="Car 2"
          />
          <div className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-20 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3913344367df6146bf06034841d2e56c62df2c82728609964fef068ee378f2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-6 h-8"
              alt="Car 3"
            />
            <div>Hatchback</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89ae1caf46786f90fbeb52e27d99fd0a0b2951c83232425cd80a045b16eb2cdd?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200"
            className="w-24 h-9 rounded-lg sm:w-28 sm:h-10 md:w-32 md:h-12"
            alt="Car 4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc20bb3d5645520ccbb2f45cda6012a2ae565d374bb1ec0874217a3caf5399bc?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200"
            className="w-24 h-9 rounded-lg sm:w-28 sm:h-10 md:w-32 md:h-12"
            alt="Car 5"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
