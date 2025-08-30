import DecathlonHeader from "@/components/DecathlonHeader";
import DecathlonHero from "@/components/DecathlonHero";
import SportCategories from "@/components/SportCategories";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DecathlonHero />
      <SportCategories />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
