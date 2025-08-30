import React from "react";
import { useCart } from "../context/CartContext";
import productsData from "../assets/mockData.json";

const Deals = () => {
  // filter only items on sale
  const products = productsData.filter((product) => product.sale);
  const { addToCart, decreaseQuantity, cart } = useCart();

  const getItemCount = (productId) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-red-600 uppercase tracking-wide">
          Limited time Labor Day Sale
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No deals available right now.
          </p>
        ) : (
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

                  {/* Name */}
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 line-clamp-1">
                    {product.category}
                  </p>

                  {/* Sale Pricing */}
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold text-lg">
                        ${product.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-400 line-through">
                        ${product.price?.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                        SALE
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <p className="text-xs text-gray-400 mt-1">
                    Rating: {product.rating}
                  </p>

                  {/* Cart Controls */}
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
        )}
      </div>
    </section>
  );
};

export default Deals;
