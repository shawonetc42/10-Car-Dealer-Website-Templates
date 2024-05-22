import React from 'react'

function Customars() {
  return (
    <div className="flex justify-center items-center px-4 py-20 bg-slate-50 max-md:px-5 ">
      <div className="flex flex-col mt-10 w-full max-w-[1400px] max-md:max-w-full container mx-auto px-4">
        <div className="flex gap-5 self-center w-full  text-slate-950 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-4xl font-bold leading-10 max-md:max-w-full">
            What our customers say
          </div>
          <div className="flex-auto my-auto text-base leading-5 max-md:max-w-full">
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </div>
        </div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6feef678111eef7d2fb237eebaf7cf1b026866f57cabbb687ca28d9d95bbb447?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                  alt="logo"
                  className="grow shrink-0 aspect-[0.95] basis-0 w-fit max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 self-stretch my-auto leading-[185%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-3.5 max-w-full whitespace-nowrap w-[130px]">
                    <div className="my-auto text-xs font-black text-zinc-300 tracking-[5px]">
                      
                    </div>
                    <div className="justify-center items-start px-2.5 py-2 text-sm font-medium text-white bg-amber-300 rounded-3xl">
                      5.0
                    </div>
                  </div>
                  <div className="mt-5 text-lg font-medium leading-5 text-slate-950 max-md:max-w-full">
                    Ali TUFAN
                  </div>
                  <div className="mt-4 text-base text-slate-950 max-md:max-w-full">
                    Designer
                  </div>
                  <div className="mt-14 text-2xl font-medium leading-10 text-slate-950 max-md:mt-10 max-md:max-w-full">
                    I'd suggest Macklin Motors Nissan Glasgow South to a friend
                    <br />
                    because I had great service from my salesman Patrick and all
                    of
                    <br />
                    the team.
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a8b7b849503dc6c0180ed39f8bba3e4092cb66eb812586bbaa7eb777c6e9859?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                  alt='icon'
                  className="shrink-0 my-auto border border-gray-200 border-solid aspect-[1.49] w-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customars
