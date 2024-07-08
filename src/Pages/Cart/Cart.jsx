import React from "react";

const Cart = ({ cart, setCart, getTotalQuantity }) => {


  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };



  return (
    <div className="container mx-auto p-4 mt-20 md:mt-0">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="mb-4 text-lg font-semibold">Total Items: {getTotalQuantity()}</div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
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
                    <p className="text-lg font-semibold">${item.quantity * item.price}</p>
                    <button
                      className="ml-4 bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-md"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total</h2>
            <p className="text-lg font-bold">${getTotalPrice()}</p>
          </div>
          <div className="mt-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
              
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
