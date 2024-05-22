import React from "react";
const cars = [
  {
    name: "Audi A6 3.5 – New",
    description: "3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    image: "/audia6.png",
    mileage: "100 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$58,000",
    detailsLink: "#",
  },
  {
    name: "BMW X5 4.0 – Used",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    image: "/newglc.png",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$48,000",
    detailsLink: "#",
  },
  {
    name: "Mercedes Benz C200 – New",
    description: "C200 AMG Line 5dr AW… Geartronic Estate",
    image: "/audia6.png",
    mileage: "500 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$68,000",
    detailsLink: "#",
  },
];

function Sections() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 pt-20 pb-6 w-full bg-slate-50 leading-[100%] rounded-[80px_80px_0px_0px] text-slate-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 mt-10 w-full max-w-[1400px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto text-4xl font-bold max-md:max-w-full">
            Explore Our Premium Brands
          </div>
          <div className="flex gap-2.5 my-auto text-base font-medium text-center">
            <div className="grow">Show All Brands</div>
            <img
              loading="lazy"
              src="arrow.svg"
              alt="icon"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 pt-4 pb-20 w-full text-lg font-medium leading-5 text-center bg-slate-50 text-slate-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 mb-3 flex-wrap">
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="/audi.png"
              alt="Audi logo"
              className="aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">Audi</div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="/bmw.png"
              alt="BMW logo"
              className="aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">BMW</div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="ford.png"
              alt="Ford logo"
              className="aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">Ford</div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="mer.png"
              alt="Mercedes Benz logo"
              className="self-center max-w-full aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">Mercedes Benz</div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="pe.png"
              alt="Peugeot logo"
              className="aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">Peugeot</div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-14 py-7 whitespace-nowrap bg-white rounded-2xl border border-gray-200 border-solid shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:px-5">
            <img
              loading="lazy"
              srcSet="vo.png"
              alt="Volkswagen logo"
              className="self-center aspect-square w-[100px]"
            />
            <div className="mt-3 text-lg font-semibold">Volkswagen</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-20 pb-6 w-full bg-white leading-[100%] text-slate-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 mt-10 w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-4xl font-bold">
            Explore All Vehicles
          </div>
          <div className="flex gap-3 my-auto text-base font-medium text-center">
            <div>View All</div>
            <img
              loading="lazy"
              src="arrow.svg"
              alt="icon"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
      {/* maping */}
      <div className="flex flex-col  self-center mt-4  max-w-[1400px] max-md:max-w-full">
        <div className="flex gap-5 items-start px-5 pt-2 ml-0 text-base font-medium leading-7 border-b border-gray-200 border-solid text-slate-950 max-md:flex-wrap">
          <div className="flex flex-col">
            <div>In Stock</div>
            <div className="shrink-0 mt-5 h-0.5 bg-blue-600" />
          </div>
          <div>New Cars</div>
          <div className="flex-auto max-md:max-w-full">Used Cars</div>
        </div>
        <div className="flex gap-5 justify-between  mt-12  max-md:flex-wrap max-md:mt-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 max-md:w-full"
            >
              <div className="relative">
                <img
                  loading="lazy"
                  src={car.image}
                  alt={car.name}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-t-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-lg font-semibold">{car.name}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 py-4 border border-t-0 border-gray-200 border-solid rounded-b-2xl">
                <div className="text-base text-gray-700">{car.description}</div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <img
                      loading="lazy"
                      src="/miles.svg"
                      alt={car.mileage}
                      className="w-4 h-4"
                    />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <img
                      loading="lazy"
                      src="/diesel.svg"
                      alt={car.fuel}
                      className="w-6 h-6"
                    />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <img
                      loading="lazy"
                      src="manual.svg"
                      alt={car.transmission}
                      className="w-4 h-4"
                    />
                    <span>{car.transmission}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xl font-bold text-gray-800">
                    {car.price}
                  </div>
                  <div className="flex items-center gap-2 text-base font-medium text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300">
                    <div>View Details</div>
                    <img
                      loading="lazy"
                      src="arrow.svg"
                      alt="View Details Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* section 3 */}
        <div class="grid grid-cols-1 md:grid-cols-2 max-md:flex max-md:flex-col max-w-[1400px] max-md:gap-5 mt-5">
          <div class="flex w-full max-md:w-full bg-gray-100">
            <div class="relative overflow-hidden flex-grow justify-center items-center px-8 md:px-16 py-10 md:py-20 rounded-2xl min-h-[350px] md:min-h-[694px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79d52186c20bacb4bc443b42b03f9f7f604342a2dcd241611e531a2e7eadf5e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600"
                class="absolute inset-0 object-cover w-full h-full"
                alt="Car"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6174e547e286712395a9f8d6587edee182199ad36c410b44b2414cae835d52cd?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                class="mt-8 md:mt-56 aspect-square w-[60px] md:w-[90px]"
                alt="Logo"
              />
            </div>
          </div>
          <div class="flex w-full max-md:w-full bg-blue-50">
            <div class="flex flex-col justify-center px-8 md:px-16 py-10 md:py-20 rounded-2xl text-gray-800">
              <div class="text-2xl md:text-4xl font-bold leading-[36px] md:leading-[56px]">
                Get A Fair Price For Your Car
                <br class="md:hidden" />
                Sell To Us Today
              </div>
              <div class="mt-4 md:mt-8 text-base leading-7">
                We are committed to providing our customers with exceptional
                service, competitive pricing, and a wide range of options.
              </div>
              <div class="flex gap-2.5 mt-4 md:mt-7">
                <div class="justify-center items-center text-xs font-bold leading-6 text-center bg-blue-500 text-white rounded-xl h-[25px] w-[25px]">
                  
                </div>
                <div class="flex-auto my-auto text-sm md:text-base font-medium leading-7">
                  We are the UK’s largest provider, with more patrols in more
                  places
                </div>
              </div>
              <div class="flex gap-2.5 mt-2 md:mt-5">
                <div class="justify-center items-center text-xs font-bold leading-6 text-center bg-blue-500 text-white rounded-xl h-[25px] w-[25px]">
                  
                </div>
                <div class="flex-auto my-auto text-sm md:text-base font-medium leading-7">
                  You get 24/7 roadside assistance
                </div>
              </div>
              <div class="flex gap-2.5 mt-2 md:mt-4">
                <div class="justify-center items-center text-xs font-bold leading-6 text-center bg-blue-500 text-white rounded-xl h-[25px] w-[25px]">
                  
                </div>
                <div class="flex-auto my-auto text-sm md:text-base font-medium leading-7">
                  We fix 4 out of 5 cars at the roadside
                </div>
              </div>
              <div class="flex gap-3 justify-center items-start self-start px-4 md:px-7 pt-3 md:pt-5 pb-6 md:pb-11 mt-6 md:mt-12 text-sm md:text-base font-medium leading-4 text-center text-white bg-blue-600 rounded-xl border border-blue-600">
                <div>Get Started</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ec3f0ac6e5c51be968beb86265658ebcca2592876bf75bfb1c3dcc36ddcc34?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                  class="shrink-0 w-3.5 aspect-square"
                  alt="Arrow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* end */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between px-2 mt-5 max-w-[1400px] text-slate-950  md:w-full">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl font-bold leading-[53.2px]">836M</div>
            <div className="mt-7 text-base leading-9 text-center md:text-left">
              CARS FOR SALE
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
            <div className="text-4xl font-bold leading-[53.2px]">738M</div>
            <div className="mt-7 text-base leading-9 text-center md:text-left">
              DEALER REVIEWS
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
            <div className="text-4xl font-bold leading-[53.2px]">100M</div>
            <div className="mt-7 text-base leading-9 text-center md:text-left">
              VISITORS PER DAY
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
            <div className="self-center text-4xl font-bold leading-[53.2px]">
              238M
            </div>
            <div className="mt-7 text-base leading-9 text-center md:text-left">
              VERIFIED DEALERS
            </div>
          </div>
        </div>
      </div>
      <div className="items-start pt-5 pr-16 pb-6 pl-64 mt-5 w-full text-4xl font-bold leading-10 bg-white border-t border-solid border-neutral-200 text-slate-950 max-md:pt-10 max-md:pr-5 max-md:pl-8 max-md:mt-10 max-md:max-w-full">
        Why Choose Us?
      </div>
      <div className="self-center px-5 mt-4 w-full max-w-[1381px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-slate-950 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ac437e9e1ba559845186f20f73aa2c518a531d3085f769a963d26e74447df8d?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                alt="icon"
                className="aspect-square w-[60px]"
              />
              <div className="mt-6 text-xl font-medium leading-6">
                Special Financing Offers
              </div>
              <div className="mt-6 text-base leading-7">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-slate-950 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/384cf688130723eeb73576371ca098ceffb65d69a9470bc0fe96dc5e8af7f3b1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                alt="icon"
                className="aspect-square w-[60px]"
              />
              <div className="mt-6 text-xl font-medium leading-6">
                Trusted Car Dealership
              </div>
              <div className="mt-6 text-base leading-7">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-slate-950 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/908afb3e74142b74748f6f9d1c1469b4919d77fd2037b927507b86965a0e6731?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                alt=""
                className="aspect-square w-[60px]"
              />
              <div className="mt-6 text-xl font-medium leading-6">
                Transparent Pricing
              </div>
              <div className="mt-6 text-base leading-7">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-slate-950 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/179b897119653803aa28c4cb461346d627c8d52cb10b26ffe5649213f0ac8ff1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                alt="icon"
                className="aspect-square w-[60px]"
              />
              <div className="mt-6 text-xl font-medium leading-6">
                Expert Car Service
              </div>
              <div className="mt-6 text-base leading-7">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
