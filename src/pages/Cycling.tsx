import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 7,
    name: "Women's Cycling Jacket",
    category: "Cycling",
    price: 1099.99,
    sizes: ["52cm", "54cm", "56cm", "58cm"],
    color: "Red",
    inStock: true,
    rating: 4.6,
    image: "https://www.decathlon.com/cdn/shop/files/8381000-product_image-p2647450.jpg?v=1744656549&width=990"
  },
  {
    id: 8,
    name: "Cycling Helmet",
    category: "Cycling",
    price: 129.99,
    sizes: ["S", "M", "L"],
    color: "Matte Black",
    inStock: true,
    rating: 4.4,
    image: "https://contents.mediadecathlon.com/p2988747/k$3d49a77042976a9c427c66379d20ee87/picture.jpg?format=auto&f=969x0"
  }
];

const Cycling = () => {
  const { addToCart, decreaseQuantity, cart } = useCart();

  const getItemCount = (productId: number) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
          Cycling
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

export default Cycling;