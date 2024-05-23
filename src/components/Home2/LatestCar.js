import React from "react";
import searchedCars from "../../data/SearchedCar";
function LatestCar() {
  return (
    <div className="flex flex-col">
      <div className="justify-center items-center px-16 pt-32 pb-8 w-full text-4xl font-bold leading-10 text-center bg-white text-slate-950 max-md:px-5 max-md:max-w-full">
        Latest Cars
      </div>
      <div className="mt-12 container mx-auto max-w-[1400px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {searchedCars.map((car, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col grow pb-5 mx-auto w-full text-white rounded-2xl bg-slate-950 max-md:mt-8">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-5 pt-5 pb-20 w-full text-sm font-medium leading-6 capitalize aspect-[1.5]">
                  {/* Car image */}
                  <img
                    loading="lazy"
                    src={car.image}
                    alt={car.name}
                    className="object-cover absolute inset-0 size-full"
                  />
                  {/* Badge for great price */}
                  {car.greatPrice && (
                    <div className="relative justify-center px-4 py-2.5 bg-green-700 rounded-[30px]">
                      Great Price
                    </div>
                  )}
                  {/* Additional images or badges can be added here */}
                </div>
                {/* Car details */}
                <div className="flex flex-col px-8 mt-5 max-md:px-5">
                  <div className="text-lg font-medium leading-5">
                    {car.name} – {car.year}
                  </div>
                  <div className="mt-3.5 text-sm leading-4">
                    {car.description}
                  </div>
                  <div className="flex gap-5 justify-between items-start px-px pt-4 pb-px mt-4 text-sm leading-4 text-center border-t border-solid border-white border-opacity-10">
                    {/* Mileage */}
                    <div className="flex flex-col">
                      <img
                        loading="lazy"
                        src={car.mileageIcon}
                        alt="Mileage"
                        className="self-center aspect-square w-[18px]"
                      />
                      <div className="mt-3.5">{car.mileage}</div>
                    </div>
                    {/* Fuel type */}
                    <div className="flex flex-col whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={car.fuelIcon}
                        alt="Fuel Type"
                        className="self-center aspect-square w-[18px"
                      />
                      <div className="mt-3.5">{car.fuelType}</div>
                    </div>
                    {/* Transmission type */}
                    <div className="flex flex-col whitespace-nowrap">
                      <img
                        loading="lazy"
                        src={car.transmissionIcon}
                        alt="Transmission"
                        className="self-center aspect-square w-[18px]"
                      />
                      <div className="mt-3.5">{car.transmission}</div>
                    </div>
                  </div>
                  {/* Price and View Details button */}
                  <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-4 w-full border-t border-solid border-white border-opacity-10">
                    <div className="text-xl font-bold leading-8">
                      {car.price}
                    </div>
                    <div className="flex gap-3 mt-1 text-base font-medium leading-7">
                      <div>View Details</div>
                      <img
                        loading="lazy"
                        src={car.viewDetailsIcon}
                        alt="View Details"
                        className="shrink-0 w-3.5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestCar;
