import React from "react";

function Footer() {
  return (
    <div className="flex flex-col text-white">
      {/* Section 1 */}
      <div className="flex justify-center items-center px-16 py-8 bg-slate-950 max-md:px-5">
        <div className="flex gap-5 justify-between w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col my-auto">
            <div className="text-3xl font-medium leading-8">Join BoxCar</div>
            <div className="mt-6 text-base leading-7">
              Receive pricing updates, shopping tips & more!
            </div>
          </div>
          <div className="flex gap-5 justify-end py-2.5 pr-2.5 pl-8 text-base bg-white bg-opacity-10 rounded-[60px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto">Your email address</div>
            <button className="justify-center px-8 py-5 font-medium text-center bg-blue-600 border border-blue-600 border-solid leading-[185%] rounded-[60px] max-md:px-5">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex justify-center items-start px-16 py-8 bg-slate-950 leading-[185%] max-md:px-5">
        <div className="flex gap-5 justify-between w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
          {/* Column 1 */}
          <div className="flex flex-col text-base">
            <div className="text-xl font-medium leading-6 capitalize">
              Company
            </div>
            <div className="mt-7">About Us</div>
            <div className="mt-7">Blog</div>
            <div className="mt-7">Services</div>
            <div className="mt-7">FAQs</div>
            <div className="mt-7">Terms</div>
            <div className="mt-7">Contact Us</div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col text-base">
            <div className="text-xl font-medium leading-6 capitalize">
              Quick Links
            </div>
            <div className="mt-8">Get in Touch</div>
            <div className="mt-7">Help Center</div>
            <div className="mt-7">Live Chat</div>
            <div className="mt-7">How It Works</div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col text-base">
            <div className="text-xl font-medium leading-6 capitalize">
              Our Brands
            </div>
            <div className="mt-8">Toyota</div>
            <div className="mt-7">Porsche</div>
            <div className="mt-7">Audi</div>
            <div className="mt-7">BMW</div>
            <div className="mt-7">Ford</div>
            <div className="mt-7">Nissan</div>
            <div className="mt-7">Peugeot</div>
            <div className="mt-7">Volkswagen</div>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col text-base">
            <div className="text-xl font-medium leading-6 capitalize">
              Vehicle Types
            </div>
            <div className="mt-7">Sedan</div>
            <div className="mt-7">Hatchback</div>
            <div className="mt-7">SUV</div>
            <div className="mt-7">Hybrid</div>
            <div className="mt-7">Electric</div>
            <div className="mt-7">Coupe</div>
            <div className="mt-7">Truck</div>
            <div className="mt-7">Convertible</div>
          </div>
          {/* Column 5 */}
          <div className="flex flex-col text-base">
            <div className="text-xl font-medium">Our Mobile App</div>
            <div className="flex gap-5 justify-between px-8 py-3.5 mt-8 rounded-2xl bg-white bg-opacity-10 max-md:px-5">
              <div className="self-start text-2xl">
                <img src="/appstore.svg" alt="App Store" />
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Download on the</div>
                <div className="mt-2.5 text-base font-medium">Apple Store</div>
              </div>
            </div>
            <div className="flex gap-5 py-3.5 pr-12 pl-6 mt-3 rounded-2xl bg-white bg-opacity-10 max-md:px-5">
              <div className="text-2xl">
                <img src="/playstore.svg" alt="Google Play" />
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Get it on</div>
                <div className="mt-2.5 text-base font-medium">Google Play</div>
              </div>
            </div>
            <div className="mt-9 text-xl font-medium">Connect With Us</div>
            <div className="flex gap-5 justify-between mt-11 text-base text-center whitespace-nowrap max-md:mt-10">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex justify-center items-center px-16 py-5 text-base leading-7 text-white border-t border-solid bg-slate-950 border-white border-opacity-10 max-md:px-5">
        <div className="flex gap-5 w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">
            © 2024 exemple.com. All rights reserved.
          </div>
          <div className="flex-auto">Terms & Conditions</div>
          <div>Privacy Notice</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
