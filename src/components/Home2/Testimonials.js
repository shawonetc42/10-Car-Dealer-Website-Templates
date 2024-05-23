import React from 'react'

function Testimonials() {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="grow px-20 pt-20 pb-12 w-full bg-indigo-50 rounded-2xl max-md:px-5 max-md:mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base text-slate-950 max-md:mt-10">
                <div className="text-3xl font-bold leading-10">
                  Are You Looking
                  <br />
                  For a Car ?
                </div>
                <div className="mt-9 leading-7">
                  We are committed to providing our customers with
                  <br />
                  exceptional service.
                </div>
                <div className="flex gap-3 justify-center px-16 py-6 mt-5 font-medium text-center text-white bg-blue-600 rounded-xl border border-blue-600 border-solid leading-[100%] max-md:px-5">
                  <div className="flex-auto">Get Started</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/436254bf980f9a689e5ea21e94659ffe5c5b5a97cb6e974b31a6ac3444130023?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                    className="shrink-0 self-start w-3.5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5d93dcb6e806cc6c3388e932b5b797126ddf5c0e8eb9d2bdd0fa3c37c78729?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                className="shrink-0 mt-40 max-w-full aspect-square w-[110px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="grow px-20 pt-20 pb-12 w-full bg-pink-100 rounded-2xl max-md:px-5 max-md:mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base text-slate-950 max-md:mt-10">
                <div className="text-3xl font-bold leading-10">
                  Do You Want to
                  <br />
                  Sell a Car ?
                </div>
                <div className="mt-9 leading-7">
                  We are committed to providing our customers with
                  <br />
                  exceptional service.
                </div>
                <div className="flex gap-3 justify-center px-16 py-6 mt-5 font-medium text-center text-white rounded-xl border border-solid bg-slate-950 border-slate-950 leading-[100%] max-md:px-5">
                  <div className="flex-auto">Get Started</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/436254bf980f9a689e5ea21e94659ffe5c5b5a97cb6e974b31a6ac3444130023?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                    className="shrink-0 self-start w-3.5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d5cb827d37af1a8b42fcc8ca01a6aed28b7a2488bd744f7e3dcd84e0542534?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                className="shrink-0 mt-40 max-w-full aspect-square w-[110px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials
