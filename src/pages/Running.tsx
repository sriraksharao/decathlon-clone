import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 5,
    name: "Men's Running Shoes",
    category: "Running",
    price: 129.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    color: "Black/White",
    inStock: true,
    rating: 4.7,
    image: "//www.decathlon.com/cdn/shop/files/8618759-product_image-p2315780_2a5b96b2-f26e-4ba1-8391-68142d88902c.jpg?v=1742379051&width=1946"
  },
  {
    id: 6,
    name: "Women's Running Shoes",
    category: "Running",
    price: 189.99,
    sizes: ["7", "8", "9", "10", "11"],
    color: "Grey/Orange",
    inStock: true,
    rating: 4.8,
    image: "https://www.decathlon.com/cdn/shop/files/8641388-product_image-p2579147.jpg?v=1740180565&width=990"
  },
];

const Running = () => {
  const { addToCart, decreaseQuantity, cart } = useCart();

  const getItemCount = (productId) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
          Running
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const quantity = getItemCount(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.category}
                </p>
                <p className="text-primary font-semibold mt-2">
                  ₹{(product.price).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">Rating: {product.rating}</p>
                {quantity > 0 ? (
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(product)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                      <span className="font-medium">{quantity}</span>
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">In Cart</span>
                  </div>
                ) : (
                  <button
                    className="mt-4 w-full bg-primary text-white rounded-md py-2 hover:opacity-90 transition"
                    onClick={() => addToCart(product, 1)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Running;