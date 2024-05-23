import React from 'react'

function JoinBox() {
  return (
    <div className="flex flex-col  items-center px-5 text-base container mx-auto max-w-2xl mt-4">
      <div className="text-3xl font-medium leading-8 text-center text-slate-950">
        Join BoxCar
      </div>
      <div className="mt-5 text-center leading-[185%] text-slate-950">
        Receive pricing updates, shopping tips & more!
      </div>
      <div className="flex gap-px justify-center self-stretch px-3 py-3 mt-7 w-full rounded-2xl border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-start self-start p-5 bg-white rounded-xl text-slate-950 w-fit max-md:max-w-full">
          Your email address
        </div>
        <div className="justify-center px-8 py-5 font-medium text-center text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid leading-[185%] max-md:px-5">
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default JoinBox
