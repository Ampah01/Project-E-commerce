import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCheckout from "../../Components/Checkout/ReviewCheckout";
import DeliveryDetails from "../../Components/Checkout/DeliveryDetails";
import Footer from "../../Components/Footer/Footer";

const ProceedToCheckout = ({
  cart,
  clearCart,
  getTotalQuantity,
  getTotalPrice,
}) => {
  const navigate = useNavigate();


  const getTax = () => {
    const taxRate = 0.1;
    return getTotalPrice() * taxRate;
  };



  return (
    <div>
    <div className="container mx-auto p-4 mt-20 md:mt-0 min-h-[100vh]">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="mb-4 text-lg font-semibold">
        Total Items: {getTotalQuantity()}
      </div>
      <div className="mb-4 text-lg font-semibold">
        Total Price: ${getTotalPrice()}
      </div>
      <div className="mb-4 text-lg font-semibold">
        Tax: ${getTax().toFixed(2)}
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="md:grid flex flex-col md:grid-cols-2 gap-4 ">
         <ReviewCheckout cart={cart}/>

          <DeliveryDetails clearCart={clearCart} getTotalQuantity={getTotalQuantity} getTotalPrice={getTotalPrice} getTax={getTax}/>
        </div>
      )}
      
    </div>
    <Footer />
    </div>
  );
};

export default ProceedToCheckout;
