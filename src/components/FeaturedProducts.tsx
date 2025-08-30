import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
    "id": 1,
    "name": "Men's Hiking Backpack",
    "category": "Hiking & Backpacking",
    "price": 329.99,
    "sizes": ["M", "L"],
    "color": "Forest Green",
    "inStock": true,
    "image": "https://www.decathlon.com/cdn/shop/files/8642599-product_image-p2687928.jpg?v=1714475928&width=990"
  },
     {
    "id": 4,
    "name": "Sleeping Bag",
    "category": "Camping",
    "price": 49.99,
    "sizes": ["Regular"],
    "color": "Blue",
    "inStock": true,
    "image": "https://www.decathlon.com/cdn/shop/files/8800273-product_image-p2455218.jpg?v=1715853839&width=990"
  },
     {
    "id": 7,
    "name": "Women's Cycling Jacket",
    "category": "Cycling",
    "price": 1099.99,
    "sizes": ["52cm", "54cm", "56cm", "58cm"],
    "color": "Red",
    "inStock": true,
    "image": "https://www.decathlon.com/cdn/shop/files/8381000-product_image-p2647450.jpg?v=1744656549&width=990"
  },
     {
    "id": 8,
    "name": "Cycling Helmet",
    "category": "Cycling",
    "price": 129.99,
    "sizes": ["S", "M", "L"],
    "color": "Matte Black",
    "inStock": true,
    "image": "https://contents.mediadecathlon.com/p2988747/k$3d49a77042976a9c427c66379d20ee87/picture.jpg?format=auto&f=969x0"
  }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-primary text-primary"
            : "fill-muted text-muted"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Most Popular</h2>
            <p className="text-xl text-muted-foreground">
              Most trusted by outdoor enthusiasts
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            VIEW ALL
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-muted/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${
                      product.badge === "Sale"
                        ? "bg-destructive text-destructive-foreground"
                        : product.badge === "New"
                        ? "bg-primary text-primary-foreground"
                        : product.badge === "Best Seller"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
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
                    {product.rating} ({product.reviews})
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
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button variant="outline">VIEW ALL</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
