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
      <div className="self-center text-4xl font-bold leading-10">
        Browse by Type
      </div>
      <div className="flex gap-5 mt-9 text-lg font-medium leading-5 whitespace-nowrap max-md:flex-wrap">
        {carTypes.map((car, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 justify-center px-6 py-7 bg-white rounded-2xl border border-gray-200 border-solid max-md:px-5"
          >
            <img
              loading="lazy"
              src={car.icon}
              alt={`${car.name} icon`}
              className="self-center aspect-square w-[34px]"
            />
            <div className="mt-4">{car.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeHero;
