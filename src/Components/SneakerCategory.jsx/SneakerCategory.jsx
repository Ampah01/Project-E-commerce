import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SneakerList from "../SneakersLists/SneakerList";

function SneakerCategory({ data, setShowLogin }) {
  function getAllSneakers(categories) {
    return categories.reduce((allSneakers, category) => {
      return allSneakers.concat(category.sneakers);
    }, []);
  }

  const allCategory = {
    name: "All",
    sneakers: getAllSneakers(data.categories),
  };

  const storedCategory = JSON.parse(localStorage.getItem("selectedCategory"));
  const initialCategory = storedCategory || allCategory;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    localStorage.setItem("selectedCategory", JSON.stringify(selectedCategory));
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4 mb-8 mt-8 relative">
      <h3 className="text-3xl font-bold mb-4 text-center">Our Categories</h3>
      <p className="text-lg leading-relaxed mb-6 text-center text-gray-700">
        Discover our versatile collection of shoes designed to meet your needs
        for every occasion. Our range includes running shoes crafted for comfort
        and performance, perfect for long-distance running or a quick jog around
        the block. Casual sneakers are ideal for everyday wear, combining style
        and comfort for walking, casual outings, and adding a sporty touch to
        your outfit.
      </p>
      <p className="font-semibold my-2 text-center">
        Sign in for best experience
      </p>
      <button
        onClick={() => setShowLogin(true)}
        className="px-2 py-2 bg-[#0F513A] text[18px] text-slate-50 rounded-2xl hover:bg-green-700 justify-center transition-all duration-300 mx-auto flex w-[70%] md:w-[10%] align-center md:rounded-md"
      >
        Sign in
      </button>
      <div className="flex flex-wrap justify-center gap-8 lg:space-x-4 md:space-x-4 my-8">
        <AnimatePresence>
          {[allCategory, ...data.categories].map((category, index) => (
            <motion.div
              key={index}
              className={`text-center cursor-pointer w-30 p-2 rounded-lg  shadow-md ${
                selectedCategory.name === category.name
                  ? "bg-[#0F513A] text-white"
                  : "bg-white"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCategorySelect(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`font-semibold text-md mt-2 relative z-20 ${
                  selectedCategory.name === category.name
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {category.name}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="w-[90%] mx-auto border bg-gray-200 my-10 "></div>
      {selectedCategory && (
        <SneakerList
          sneakers={selectedCategory.sneakers}
        />
      )}
    </div>
  );
}

export default SneakerCategory;
