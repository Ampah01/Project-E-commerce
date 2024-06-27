import React from "react";

const SneakerCard = () => {
  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mb-6">
      <div
        className="bg-cover bg-center h-56 card-image"
        style={{
          backgroundImage:
            "url('https://img01.ztat.net/article/spp-media-p1/13bdb0e755104375befcd830031c17d3/2152209340014b89aaabb90abe0c2cf1.jpg?imwidth=1800&filter=packshot')",
        }}
      ></div>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2">Nike Air Zoom Pegasus 38</div>
        <p className="text-gray-600 text-sm mb-4">
          Designed for high-speed running with responsive cushioning.
        </p>
        <div className="flex justify-between mb-4">
          <div className="text-xs text-gray-600 font-medium">Brand: Nike</div>
          <div className="text-xs text-gray-600 font-medium">
            Category: Running
          </div>
        </div>
        <div className="flex mb-4">
          <div className="custom-select">
            <select id="color-select" name="color" className="block">
              <option>US 7</option>
              <option>US 8</option>
              <option>US 9</option>
              <option>US 10</option>
              <option>US 11</option>
            </select>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
            </svg>
          </div>
          <div className="custom-select">
            <select id="quantity-select" name="quantity" className="block">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
            </svg>
          </div>
          <div className="w-1/3 custom-select">
            <select id="color-select" name="color" className="block">
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="gray">Gray</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
            </select>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.5-1.5L10 9.001l3.5-3.5L15 7z" />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <button className=" custom-button bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
