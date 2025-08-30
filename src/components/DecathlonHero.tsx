import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tent, Backpack, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const heroItems = [
  {
    title: "Labor Day Sale:",
    highlight: "Up to 40% Off",
    description:
      "The best of the outdoors is now up to 40% off. Shop backpacks, apparel, and more. Our high-performance gear is ready for your next adventure.",
    button: "Shop the Sale",
    icon: Tent,
    href: "/sale",
    image:
      "https://media.istockphoto.com/id/627761528/photo/young-couple-doing-their-stretches-in-the-park.jpg?s=612x612&w=0&k=20&c=uK0rFKLOeBPNFuF1CO26QV9POE9nIG9FRlgYfytcZHo=",
  },
  {
    title: "Gear Up for Adventure:",
    highlight: "New Arrivals",
    description:
      "Check out the latest in outdoor gear and apparel. Designed for comfort, durability, and style on your next journey.",
    button: "Explore Now",
    icon: Backpack,
    href: "/new-arrivals",
    image:
      "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Stay Active:",
    highlight: "Sports Essentials",
    description:
      "From running shoes to yoga mats, get everything you need to stay active and energized every day.",
    button: "Shop Essentials",
    icon: Zap,
    href: "/sports",
    image:
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const DecathlonHeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto change slides every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroItems.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + heroItems.length) % heroItems.length);

  const item = heroItems[current];

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              {item.title}
              <br />
              <span className="text-primary">{item.highlight}</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg">
              {item.description}
            </p>

            <Link to={item.href}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg rounded-full"
              >
                {item.button}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Icon */}
     
        <div className="w-64 h-64 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
          <div className="text-6xl">
            {<item.icon size={90} color="white" />}
          </div>
        </div>
      

      {/* Side Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default DecathlonHeroCarousel;