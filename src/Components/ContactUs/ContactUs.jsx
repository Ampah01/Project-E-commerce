import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 mb-8 mt-20 md:mt-8 max-w-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#0F513A]">
        Contact Us
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">
          Contact Details
        </h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Address:</span> 123 Kicks Street,
            Sneaker City
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Phone:</span> +1 (123) 456-7890
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:info@kickskingdom.com"
              className="text-[#0F513A] hover:underline"
            >
              info@kickskingdom.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Website:</span>{" "}
            <a
              href="http://www.kickskingdom.com"
              className="text-[#0F513A] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.kickskingdom.com
            </a>
          </p>
        </div>
        <hr className="my-4" />
        <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">
          Additional Subjects
        </h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-700 mb-2">
            <span className="font-bold">Sales Inquiries:</span>{" "}
            <a
              href="mailto:sales@kickskingdom.com"
              className="text-[#0F513A] hover:underline"
            >
              sales@kickskingdom.com
            </a>
          </li>
          <li className="text-gray-700 mb-2">
            <span className="font-bold">Customer Support:</span>{" "}
            <a
              href="mailto:support@kickskingdom.com"
              className="text-[#0F513A] hover:underline"
            >
              support@kickskingdom.com
            </a>
          </li>
          <li className="text-gray-700 mb-2">
            <span className="font-bold">Press & Media:</span>{" "}
            <a
              href="mailto:media@kickskingdom.com"
              className="text-[#0F513A] hover:underline"
            >
              media@kickskingdom.com
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">
          Random Location
        </h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Address:</span> 456 Sneaker Avenue, Shoe
            Town
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Phone:</span> +1 (987) 654-3210
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:contact@shoetown.com"
              className="text-[#0F513A] hover:underline"
            >
              contact@shoetown.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Website:</span>{" "}
            <a
              href="http://www.shoetown.com"
              className="text-[#0F513A] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.shoetown.com
            </a>
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0F513A]">
          Location Details
        </h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Address:</span> 123 Main Street,
            Anytown, USA
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Hours of Operation:</span> Monday -
            Friday: 9am - 5pm
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Contact Information:</span> Phone: (123)
            456-7890, Email: info@example.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Services Offered:</span> Retail sales,
            fittings, custom orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
