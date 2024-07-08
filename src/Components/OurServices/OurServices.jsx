import React from "react";

function OurServices() {
  const services = [
    {
      title: "Custom Shoe Designs",
      description:
        "Get your perfect fit with our custom shoe design service, tailored to your preferences.",
      image:
        "https://printify.com/wp-content/uploads/2023/02/Start-Selling-Custom-Sneakers.jpg",
    },
    {
      title: "Free Shipping",
      description:
        "Enjoy free shipping on all orders, ensuring you get your shoes delivered right to your doorstep.",
      image:
        "https://res.cloudinary.com/greenbuildingsupply/image/upload/f_auto,q_auto/img/cat/Other/Category-Page-N-Free-Shipping.jpg",
    },
    {
      title: "Customer Support",
      description:
        "Our dedicated customer support team is here to help you with any inquiries or issues.",
      image:
        "https://www.deskera.com/blog/content/images/2021/06/Blog_customercare_1500x884-1.jpg",
    },
    {
      title: "Product Warranty",
      description:
        "We offer a comprehensive warranty on all our products, giving you peace of mind with every purchase.",
      image:
        "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/blt8bbf16c2d7a209e5/blt6ee6ff39be110f2e/618288c24e47cd6f4106a319/shutterstock_731079778.jpg",
    },
  ];

  return (
    <div className="container mx-auto mb-8 mt-20 md:mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#0F513A]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="w-full h-56 bg-[#F3F4F6] flex items-center justify-center rounded-t-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#0F513A]">
                {service.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
