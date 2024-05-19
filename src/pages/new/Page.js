// src/Page.js
import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Joe",
  },
];

function Page() {
  const params = useParams();
  const { id } = params;
  const datafind = data.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-900">Page</h1>
          <p className="mt-2 text-center text-lg text-gray-600">
            {datafind.name}
          </p>
          <p className="mt-2 text-center text-lg text-gray-600">{params.id}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
