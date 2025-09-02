import React from "react";
import { useCart } from "../context/CartContext";
import mockData from "../assets/mockdata.json"; // import your JSON file
import { Link } from "react-router-dom";

const Running = () => {
  const { addToCart, decreaseQuantity, cart } = useCart();

  const products = mockData.filter(
    (product) => product.category === "Running"
  );

  const getItemCount = (productId: number) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i - rating < 1) {
        stars.push(<span key={i} className="text-yellow-500">☆</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
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
                                  <Link to={`/product/${product.id}`}>
                
                <img
                  src={product.image.startsWith("//") ? "https:" + product.image : product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                </Link>
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.category}</p>

                {/* Rating stars with numeric value */}
                <div className="mt-1 flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 font-medium">{product.rating.toFixed(1)}</span>
                </div>

                <p className="text-primary font-semibold mt-2">${product.price.toLocaleString()}</p>

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
