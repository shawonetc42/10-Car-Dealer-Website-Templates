import React from "react";

const carData = [
  {
    make: "Audi",
    model: "A5",
    year: 2023,
    image: "/audia6.png",
    mileage: 500,
    price: 45000,
    sale: true
  },
  {
    make: "Audi",
    model: "A4",
    year: 2022,
    image: "Corolla.png",
    mileage: 150,
    price: 120000,
    sale: true
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 2022,
    image: "fordcar.png",
    mileage: 200,
    price: 55000,
    sale: false
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    image: "newglc.png",
    mileage: 300,
    price: 68000,
    sale: true
  },
  // Add more car data here if needed
];




function PopularMakes() {
  return (
    <div className="flex flex-col items-center py-10 lg:py-20 pl-10 lg:pl-20 bg-gray-900">
      <div className="flex items-center justify-between w-full max-w-6xl px-5 lg:px-0 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold">Popular Makes</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">View All</span>
          <img
            loading="lazy"
            src="/arrowwhite.svg"
            className="w-6 h-6 object-contain "
            alt="View All Icon"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {/* Map over carData */}
        {carData.map((car, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                loading="lazy"
                src={car.image}
                className="w-full h-64 object-cover"
                alt="Car"
              />
              {car.sale && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {car.make} {car.model} – {car.year}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{car.mileage} Miles</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">${car.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMakes;
