import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background_1 from "../../assets/background_1.jpg";
import background_2 from "../../assets/background_2.jpg";
import background_3 from "../../assets/background_3.jpg";

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
    <div className="overflow-hidden md:mt-[90px]">
      <Slider {...settings}>
        <div
          key="slide1"
          className="relative h-[90vh] md:h-[40vw] w-full md:w-4/5 rounded-sm overflow-hidden"
        >
          <img
            src={background_1}
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Get your sneakers at our{" "}
              <span className="text-green-500">kingdom</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:w-[50%]">
              Unleash your potential with SneakerShop. Our cutting-edge
              sneakers blend technology and design to deliver peak performance
              and everyday elegance. Walk with confidence, run with excellence
            </p>
            <button className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300">
              View sneakers
            </button>
          </div>
        </div>

        <div
          key="slide2"
          className="relative h-[90vh] md:h-[40vw] w-full md:w-4/5 rounded-sm overflow-hidden"
        >
          <img
            src={background_2}
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Your <span className="text-green-500">Sneaker</span> Journey
              Starts Here
            </h1>
            <p className="text-lg md:text-xl mb-6 md:w-[50%]">
              SneakerShop: Where innovation meets style. Explore our range of
              premium sneakers designed to enhance your performance and elevate
              your look. Comfort and fashion, redefined
            </p>
            <button className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300">
              View sneakers
            </button>
          </div>
        </div>

        <div
          key="slide3"
          className="relative h-[90vh] md:h-[40vw] w-full md:w-4/5 rounded-sm overflow-hidden"
        >
          <img
            src={background_3}
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75 flex flex-col md:justify-end justify-center items-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Discover Your Perfect{" "}
              <span className="text-green-500">Sneaker</span> Match
            </h1>
            <p className="text-lg md:text-xl mb-6 md:w-[50%]">
              Experience the future of footwear at SneakerShop. Discover
              high-performance, innovative sneakers crafted for athletes and
              trendsetters alike. Step up your game with unparalleled style and
              comfort
            </p>
            <button className="px-4 py-2 md:mb-8 bg-green-500 text-white rounded-md hover:bg-green-700 transition-all duration-300">
              View sneakers
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Header;
