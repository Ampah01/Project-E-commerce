import React, { useState } from "react";
import { motion } from "framer-motion";

function SneakerCategory({ data }) {
  
 
  const [selectedCategory, setSelectedCategory] = useState(data.categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4 mb-8 mt-8 relative">
      <h3 className="text-3xl font-bold mb-4 text-center">
        Our Categories
      </h3>
      <div className="relative z-10 flex flex-wrap justify-center gap-8 lg:space-x-10 md:space-x-4">
        {data.categories.map((category, index) => (
          <motion.div
            key={index}
            className={`text-center cursor-pointer w-30 p-2 rounded-lg overflow-hidden shadow-md ${
              selectedCategory === category
                ? "bg-[#0F513A] text-white"
                : "bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCategorySelect(category)}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`font-semibold text-md mt-2 ${
                selectedCategory === category ? "text-white" : "text-black"
              }`}
            >
              {category.name}
            </div>
          </motion.div>
        ))}
      </div>
     
    
    </div>
  );
}

export default SneakerCategory;
