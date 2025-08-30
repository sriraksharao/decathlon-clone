import { 
  Search, 
  User, 
  ShoppingCart, 
  Menu,
  Sparkles,      // for New Arrivals
  Mountain,      // for Hiking
  Tent,          // for Camping
  Activity,      // for Running
  Bike,          // for Cycling
  Tag,            // for Deals
  BaggageClaim,
  BaggageClaimIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const DecathlonHeader = () => {
  const { cart } = useCart();

  return (
    <>
      {/* Top Banner */}
      {/* <Link to="\deals" className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        Labor Day Sale - Up to 40% Off →
      </Link> */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        Labor Day Sale - Up to 40% Off →
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/Sports" className="text-foreground hover:text-primary transition-colors font-medium">Sports</a>
              <a href="/Men" className="text-foreground hover:text-primary transition-colors font-medium">Men</a>
              <a href="/Women" className="text-foreground hover:text-primary transition-colors font-medium">Women</a>
              <a href="/Unisex" className="text-foreground hover:text-primary transition-colors font-medium">Unisex</a>
            </nav>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-[hsl(var(--decathlon-blue))]">DECATHLON</h1>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.items.length}
                  </span>
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-8 py-3 overflow-x-auto">
              <Link to="/new-arrivals" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Sparkles className="h-4 w-4" />
                <span>New Arrivals</span>
              </Link>
              <Link to="/all-products" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <BaggageClaimIcon className="h-4 w-4" />
                <span>All</span>
              </Link>
              <Link to="/hiking-backpacking" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Mountain className="h-4 w-4" />
                <span>Hiking & Backpacking</span>
              </Link>
              <Link to="/camping" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Tent className="h-4 w-4" />
                <span>Camping</span>
              </Link>
              <Link to="/running" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Activity className="h-4 w-4" />
                <span>Running</span>
              </Link>
              <Link to="/cycling" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Bike className="h-4 w-4" />
                <span>Cycling</span>
              </Link>
              <Link to="/deals" className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors">
                <Tag className="h-4 w-4" />
                <span>Deals</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default DecathlonHeader;
