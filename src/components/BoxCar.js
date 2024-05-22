import React from "react";

function BoxCar() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-[1400px]">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Shop BoxCar Your Way
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">New Cars For Sale</h3>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            consectetur odio sit amet efficitur.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Used Cars For Sale</h3>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            consectetur odio sit amet efficitur.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Browse By Type</h3>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            consectetur odio sit amet efficitur.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Browse By Brand</h3>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            consectetur odio sit amet efficitur.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Ford Cars</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            consectetur odio sit amet efficitur.
          </p>
        </div>
        {/* More car brands */}
      </div>
    </div>
  );
}

export default BoxCar;
