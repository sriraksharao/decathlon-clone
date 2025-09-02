import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import productsData from "@/assets/mockdata.json";
import { Link } from "react-router-dom";
// IDs of products to display as Featured
const FEATURED_IDS = [3,4,13, 6, 7, 8];

const FeaturedProducts = () => {
  const products = productsData.filter((product) =>
    FEATURED_IDS.includes(product.id)
  );
  const { addToCart, decreaseQuantity, cart } = useCart();

  const getItemCount = (productId: number) => {
    const item = cart.items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Most trusted by outdoor enthusiasts
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            VIEW ALL
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product : any) => {
            const quantity = getItemCount(product.id);
            return (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="relative aspect-square bg-muted/30">
                  <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    />
                    </Link>

                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${
                        product.badge === "Sale"
                          ? "bg-destructive text-destructive-foreground"
                          : product.badge === "New"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">{renderStars(product.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews || 0})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {quantity > 0 ? (
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
                    ) : (
                      <Button
                        size="sm"
                        className="opacity-100 transition-opacity"
                        onClick={() => addToCart(product, 1)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-8 sm:hidden">
          <Button variant="outline">VIEW ALL</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
