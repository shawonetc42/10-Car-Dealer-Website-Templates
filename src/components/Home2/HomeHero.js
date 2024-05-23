import React from "react";

function HomeHero() {
  const carTypes = [
    { name: "suv", icon: "/icons/SVG.svg" },
    { name: "Sedan", icon: "/icons/SVG-1.svg" },
    { name: "Hatchback", icon: "/icons/SVG-2.svg" },
    { name: "Coupe", icon: "/icons/SVG-3.svg" },
    { name: "Hybrid", icon: "/icons/SVG-4.svg" },
    { name: "Convertible", icon: "/icons/SVG-5.svg" },
    { name: "Van", icon: "/icons/SVG-6.svg" },
    { name: "Truck", icon: "/icons/SVG-7.svg" },
    { name: "Electric", icon: "/icons/SVG-8.svg" },
    // Add more car types and icons as needed
  ];

  return (
    <div className="flex flex-col px-5 text-center text-slate-950 max-w-[1400px] mx-auto">
      <div className="self-center text-4xl font-bold leading-10 mt-5 sm:mt-10">
        Browse by Type
      </div>
      <div className="flex gap-5 mt-9 text-lg font-medium leading-5 whitespace-nowrap flex-wrap justify-center">
        {carTypes.map((car, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center px-6 py-7 bg-white rounded-2xl border border-gray-200 border-solid sm:px-5 sm:py-6 lg:flex-1 max-w-[200px] md:max-w-[160px]"
          >
            <img
              loading="lazy"
              src={car.icon}
              alt={`${car.name} icon`}
              className="w-[34px] h-[34px] mb-4"
            />
            <div>{car.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeHero;
