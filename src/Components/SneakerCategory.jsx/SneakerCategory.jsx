import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SneakerList from "../SneakersLists/SneakerList";

function SneakerCategory({ data }) {
  // Function to get all sneakers from all categories
  function getAllSneakers(categories) {
    return categories.reduce((allSneakers, category) => {
      return allSneakers.concat(category.sneakers);
    }, []);
  }

  // Create an "All" category with all sneakers combined
  const allCategory = { name: "All", sneakers: getAllSneakers(data.categories) };

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(allCategory);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4 mb-8 mt-8 relative">
      <h3 className="text-3xl font-bold mb-4 text-center">Our Categories</h3>
      <div className="relative z-10 flex flex-wrap justify-center gap-8 lg:space-x-10 md:space-x-4">
        <AnimatePresence>
          {[allCategory, ...data.categories].map((category, index) => (
            <motion.div
              key={index}
              className={`text-center cursor-pointer w-30 p-2 rounded-lg overflow-hidden shadow-md ${
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
                className={`font-semibold text-md mt-2 ${
                  selectedCategory.name === category.name ? "text-white" : "text-black"
                }`}
              >
                {category.name}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Render SneakerList component with selectedCategory sneakers */}
      {selectedCategory && (
        <SneakerList sneakers={selectedCategory.sneakers} />
      )}
    </div>
  );
}

export default SneakerCategory;

