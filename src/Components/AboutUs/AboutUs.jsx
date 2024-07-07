import React from "react";
import logo from "../../assets/Kingdom.jpg";
import teamPhoto from "../../assets/background_2.jpg";
import shoesPhoto from "../../assets/background_3.jpg";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#0F513A]">
        About Kicks Kingdom
      </h1>
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Kicks Kingdom Logo" className="w-40 h-auto" />
      </div>
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
        Welcome to Kicks Kingdom, your premier destination for the latest and
        greatest in footwear. Our mission is to provide high-quality, stylish,
        and comfortable shoes for every occasion. Whether you're looking for the
        perfect pair of running shoes, casual sneakers, elegant dress shoes, or
        durable boots, Kicks Kingdom has you covered.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Kicks Kingdom, we are dedicated to bringing you the finest
            selection of footwear that combines style, comfort, and durability.
            Our goal is to cater to the diverse needs of our customers, ensuring
            that everyone finds the perfect pair of shoes for any activity or
            event.
          </p>
          <div className="flex justify-center mt-4">
            <img
              src={shoesPhoto}
              alt="Shoes Collection"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">Our Values</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We believe in quality, innovation, and customer satisfaction. Our
            values guide us in every decision we make, from the selection of
            materials to the design and production process. We strive to create
            shoes that not only look great but also provide the comfort and
            support you need for your active lifestyle.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">Our History</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Kicks Kingdom was founded with a passion for footwear and a vision to
          revolutionize the shoe industry. From our humble beginnings, we have
          grown into a trusted name, known for our commitment to quality and
          customer satisfaction. Over the years, we have expanded our product
          range and continuously innovated to bring you the best in footwear.
        </p>
        <div className="flex justify-center">
          <img
            src={teamPhoto}
            alt="Kicks Kingdom Team"
            className="w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
