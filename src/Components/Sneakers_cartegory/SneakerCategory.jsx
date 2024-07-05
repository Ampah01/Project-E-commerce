import React, { useState } from "react";

function SneakerCategory({ data }) {
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  console.log(data);

  const handleClick = (sneaker) => {
    setSelectedSneaker(sneaker);
  };

  return (
    <div className="container mx-auto p-4">
      {data.categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.sneakers.map((sneaker) => (
              <div
                key={sneaker.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto card mb-4"
              >
                <div
                  className="card-image bg-contain bg-center  h-45"
                  style={{ backgroundImage: `url(${sneaker.image})` }}
                  onClick={() => setSelectedSneaker(sneaker)}
                ></div>
                <div className="px-4 py-2">
                  <div className="font-bold text-lg mb-10 h-5">
                    {sneaker.brand} - {sneaker.model}
                  </div>
                  <p className="text-gray-600 text-sm mb-10 h-5">
                    {sneaker.description}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600 font-medium">
                      Color: {sneaker.color}
                    </span>
                    <span className="text-xs text-gray-600 font-medium">
                      Price: ${sneaker.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="custom-select relative">
                      <select
                        id={`size-${sneaker.id}`}
                        name={`size-${sneaker.id}`}
                        className="block bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                      >
                        {sneaker.sizes.map((size, index) => (
                          <option key={index} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
                      </svg>
                    </div>
                    <div className="custom-select relative">
                      <select
                        id={`quantity-${sneaker.id}`}
                        name={`quantity-${sneaker.id}`}
                        className="block bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                      >
                        {[...Array(5).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {qty + 1}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
                      </svg>
                    </div>
                    <div className="custom-select relative">
                      <select
                        id={`color-${sneaker.id}`}
                        name={`color-${sneaker.id}`}
                        className="block bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                      >
                        {["Black", "White", "Gray", "Blue", "Red"].map(
                          (color, index) => (
                            <option key={index} value={color.toLowerCase()}>
                              {color}
                            </option>
                          )
                        )}
                      </select>
                      <svg
                        className="h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <button className="custom-button text-sm py-2 px-4 rounded-full w-full bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mb-2">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedSneaker && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
            <h3 className="text-xl font-bold mb-2">{selectedSneaker.model}</h3>
            <img
              src={selectedSneaker.image}
              alt={selectedSneaker.model}
              className="rounded-lg mb-2 flex justify-center align-center"
              style={{ width: "300px", height: "300px" }}
            />
            <p className="text-lg font-bold bg-green-800 text-white py-2 px-4 rounded-md w-20 float-right">
              ${selectedSneaker.price}
            </p>
            <p className="text-sm text-gray-600">
              {selectedSneaker.description}
            </p>
            <button
              className="mt-4 bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded-md"
              onClick={() => setSelectedSneaker(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SneakerCategory;