import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  console.log("Products in cart:", cart);
  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setTimeout(() => {
      setShowPaymentSuccess(true);
      clearCart();
    }, 1000);
  };

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64 space-y-4">
        <p className="text-lg text-muted-foreground">Your cart is empty.</p>
        {showPaymentSuccess && (
          <p className="text-green-500 font-semibold text-lg">
            Payment Successful! 🎉
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
          Your Cart
        </h2>

        <div className="grid gap-6 mb-12">
          {cart.items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.product.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.product.name}
                  </p>
                  <p className="text-primary font-semibold mt-1">
                    ${(item.product.price).toLocaleString()}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.product)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item.product, 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 font-semibold hover:underline mt-4 sm:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>₹199</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>${(totalPrice).toLocaleString()}</span>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Select Payment Method</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                UPI / Wallet
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-primary text-white py-3 rounded hover:opacity-90 transition"
          >
            Proceed to Pay
          </button>

          {showPaymentSuccess && (
            <p className="text-green-500 font-semibold mt-4 text-center">
              Payment Successful! 🎉
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
