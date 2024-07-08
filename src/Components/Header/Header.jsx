import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background_1 from "../../assets/background_1.jpg";
import background_2 from "../../assets/background_2.jpg";
import background_3 from "../../assets/background_3.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.3, duration: 0.6 }
  }
};


function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div
          key="slide1"
          className="relative h-[80vh] md:h-[50vw] lg:h-[40vw] w-full md:w-4/5  overflow-hidden"
        >
          <img
            src={background_1}
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <motion.h1 
              className="text-3xl lg:text-5xl md:text-4xl font-bold tracking-tighter mb-1"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Get your sneakers at our{" "}
              <span className="text-green-500">kingdom</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 md:w-[50%]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Unleash your potential with Kick Kingdom. Our cutting-edge
              sneakers blend technology and design to deliver peak performance
              and everyday elegance. Walk with confidence, run with excellence
            </motion.p>
            <motion.button 
              className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              View sneakers
            </motion.button>
          </div>
        </div>

        <div
          key="slide2"
          className="relative h-[80vh] md:h-[50vw] lg:h-[40vw] w-full md:w-4/5 overflow-hidden"
        >
          <img
            src={background_2}
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <motion.h1 
              className="text-3xl lg:text-5xl md:text-4xl font-bold tracking-tighter mb-4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Your <span className="text-green-500">Sneaker</span> Journey
              Starts Here
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 md:w-[50%]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Kicks Kingdom: Where innovation meets style. Explore our range of
              premium sneakers designed to enhance your performance and elevate
              your look. Comfort and fashion, redefined
            </motion.p>
            <motion.button 
              className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              View sneakers
            </motion.button>
          </div>
        </div>

        <div
          key="slide3"
          className="relative h-[80vh] md:h-[50vw] lg:h-[40vw] w-full md:w-4/5 overflow-hidden"
        >
          <img
            src={background_3}
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <motion.h1 
              className="text-3xl lg:text-5xl md:text-4xl font-bold tracking-tighter mb-4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Discover Your Perfect{" "}
              <span className="text-green-500">Sneaker</span> Match
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 md:w-[50%]"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Experience the future of footwear at Kick Kingdom. Discover
              high-performance, innovative sneakers crafted for athletes and
              trendsetters alike. Step up your game with unparalleled style and
              comfort
            </motion.p>
            <motion.button 
              className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              View sneakers
            </motion.button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Header;
