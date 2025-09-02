import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "@/assets/mockData.json";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  sale: boolean;
  sizes: string[];
  gender: string;
  color: string;
  inStock: boolean;
  rating: number;
  image: string;
}

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = mockData.find((item: ProductType) => item.id.toString() === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div className="p-4 text-center text-gray-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice ?? product.price,
      size: selectedSize,
      image: product.image,
      quantity: 1,
    });

    alert(`${product.name} (Size ${selectedSize}) added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-lg mx-auto rounded-md shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Category and Gender */}
        <div className="flex items-center gap-4 text-gray-600">
          <span>Category: {product.category}</span>
          <span>Gender: {product.gender === "M" ? "Men" : product.gender === "F" ? "Women" : "Unisex"}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold">
            ₹{product.discountPrice ?? product.price}
          </span>
          {product.sale && product.discountPrice && (
            <span className="line-through text-gray-400">₹{product.price}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 text-yellow-500" />
          <span>{product.rating}</span>
        </div>

        {/* Color */}
        <div>
          <span className="font-medium">Color: </span>
          <span>{product.color}</span>
        </div>

        {/* Sizes */}
        <div>
          <span className="font-medium">Available Sizes: </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`border px-3 py-1 rounded-md text-sm cursor-pointer transition-colors ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Stock Status */}
        <div>
          {product.inStock ? (
            <span className="text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-red-600 font-medium">Out of Stock</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          onClick={handleAddToCart}
          className={`mt-4 px-6 py-3 rounded-md font-semibold text-white transition-colors ${
            product.inStock ? "bg-primary hover:bg-primary-dark" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Product;
