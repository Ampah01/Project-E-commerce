import React, { useState } from "react";

const DeliveryDetails = ({ clearCart, getTotalPrice, getTax }) => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryDate: "",
    deliveryOption: "standard",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const getTotalCost = () => {
    const totalBeforeTax = getTotalPrice() + getShippingCost();
    const totalTax = getTax();
    return totalBeforeTax + totalTax;
  };

  const handleCompletePurchase = () => {
    if (
      !deliveryDetails.name ||
      !deliveryDetails.address ||
      !deliveryDetails.city ||
      !deliveryDetails.postalCode
    ) {
      alert("Please fill in all delivery details.");
      return;
    }

    let deliveryDays;
    switch (deliveryDetails.deliveryOption) {
      case "express":
        deliveryDays = 1;
        break;
      case "standard":
        deliveryDays = 3;
        break;
      case "free":
        deliveryDays = 7;
        break;
      default:
        deliveryDays = 3;
        break;
    }

    const currentDate = new Date();
    const deliveryDate = new Date(
      currentDate.setDate(currentDate.getDate() + deliveryDays)
    );
    const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      deliveryDate: formattedDeliveryDate,
    }));

    clearCart();

    const message = `Purchase completed! Your order will arrive on ${formattedDeliveryDate}. Thank you for shopping with us!`;

    alert(message);

    navigate("/");
  };

  const getShippingCost = () => {
    return deliveryDetails.deliveryOption === "express" ? 15 : 5;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg md:h-[80vh]">
      <h2 className="text-xl font-semibold mb-2">Delivery Details</h2>
      <div className="md:grid  gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={deliveryDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={deliveryDetails.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            value={deliveryDetails.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={deliveryDetails.postalCode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            Delivery Option
          </label>
          <select
            name="deliveryOption"
            value={deliveryDetails.deliveryOption}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="standard">Standard Delivery - $5 (3 days)</option>
            <option value="express">Express Delivery - $15 (1 day)</option>
            <option value="free">Free Shipping (7 days)</option>
          </select>
        </div>
      </div>

      <div className="mt-4 bg-gray-100 py-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Total Cost:{" "}
          <span className="text-lg font-bold">${getTotalCost()}</span>
        </h2>
      </div>

      <div className="mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          onClick={handleCompletePurchase}
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default DeliveryDetails;
