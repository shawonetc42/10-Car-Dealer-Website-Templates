import React, { useState } from "react";

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // Define car categories
  const categories = ["Sedans", "SUVs", "Trucks", "Electric", "Luxury"];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              alt="logo"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba1f69709a18b18db85f154ff85b77ff2437494b02edad58fcd3aa10ac12561?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="h-8"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleCategories}
              className="block text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a
            href="/signin"
            className="block px-3 py-2 rounded-md hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="/submit-listing"
            className="block px-3 py-2 rounded-md bg-white text-gray-900 hover:bg-gray-100"
          >
            Submit Listing
          </a>
        </div>
      </div>
      {showCategories && (
        <div className="md:hidden">
          <ul className="bg-gray-800 py-2">
            {/* Map over categories and render category links */}
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
