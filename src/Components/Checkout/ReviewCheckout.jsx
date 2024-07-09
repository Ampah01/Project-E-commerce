import React from "react";

const ReviewCheckout = ({ cart }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Review Your Order</h2>
      {cart.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="bg-white p-4 rounded-lg shadow-lg mb-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  {item.size}, {item.color}
                </p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price per item: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-semibold">
                ${item.quantity * item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCheckout;
