import React from "react";
import { useCart } from "../context/CartContext";
import productsData from "../assets/mockdata.json";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// Only show these product IDs for New Arrivals
const NEW_ARRIVAL_IDS = [3, 5, 7, 8];

const NewArrivals = () => {
  const products = productsData.filter((product) =>
    NEW_ARRIVAL_IDS.includes(product.id)
  );
  const { addToCart, decreaseQuantity, cart } = useCart();

  const getItemCount = (productId: number) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const quantity = getItemCount(product.id);

            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between"
              >
                                  <Link to={`/product/${product.id}`}>
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                </Link>

                <h3 className="font-bold text-lg mb-1 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-1">
                  {product.category}
                </p>

                {/* ⭐ Rating */}
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index < fullStars) {
                      return (
                        <Star
                          key={index}
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      );
                    } else if (index === fullStars && hasHalfStar) {
                      return (
                        <Star
                          key={index}
                          size={16}
                          className="text-yellow-400"
                          style={{
                            fill: "url(#half-gradient)",
                          }}
                        />
                      );
                    }
                    return (
                      <Star key={index} size={16} className="text-gray-300" />
                    );
                  })}

                  {/* gradient for half-star */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="half-gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="50%" stopColor="#facc15" />
                        <stop offset="50%" stopColor="lightgray" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="ml-2 text-sm text-gray-500">
                    {product.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-primary font-semibold mt-2">
                  ${product.price.toLocaleString()}
                </p>

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

export default NewArrivals;
