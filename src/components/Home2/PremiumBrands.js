import React from 'react'

function PremiumBrands() {
  return (
    <div className="flex justify-center items-center 5 mt-2 text-base rounded-2xl bg-slate-50 text-slate-950 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col my-auto max-md:max-w-full">
          <div className="text-4xl font-bold capitalize leading-[56px] max-md:max-w-full">
            Explore Our Premium
            <br />
            Brands
          </div>
          <div className="mt-10 leading-7 max-md:mt-10 max-md:max-w-full">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
            <br />
            deserunt mollit anim id es
          </div>
          <div className="flex gap-2.5 justify-center self-start px-7 py-5 mt-7 font-medium text-center text-white bg-blue-600 rounded-xl border border-blue-600 border-solid leading-[100%] max-md:px-5">
            <div className="grow">Show All Brands</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e7879c48f64bd9b3c6dcd1b6dbc102e7c59c40e4b7615b63b37a40228e1bb0?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              alt=''
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e4b7f14781793891cd97e2b28431fad9ad7d9c695f7c71e36924f62c2906cec?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          alt=''
          className=" aspect-[1.03] w-[50%] max-w-full"
        />
      </div>
    </div>
  );
}

export default PremiumBrands
