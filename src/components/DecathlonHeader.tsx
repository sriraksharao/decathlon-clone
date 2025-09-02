import { useState, useEffect } from "react";
import { 
  Search, User, ShoppingCart, Menu,
  Sparkles, Mountain, Tent, Activity, Bike, Tag, BaggageClaimIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import HeaderNav from "@/pages/Sports";
import mockData from "@/assets/mockdata.json"; // import your mockdata

interface Product {
  id: string;
  name: string;
  route: string;
}

const DecathlonHeader = () => {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const navigate = useNavigate();

  const navLinks = [
    // { name: "Sports", route: "/Sports", icon: Activity },
    // { name: "Men", route: "/Men", icon: User },
    // { name: "Women", route: "/Women", icon: User },
    // { name: "Unisex", route: "/Unisex", icon: User },
    { name: "Hiking & Backpacking", route: "/hiking-backpacking", icon: Mountain },
    { name: "Camping", route: "/camping", icon: Tent },
    { name: "Running", route: "/running", icon: Activity },
    { name: "Cycling", route: "/cycling", icon: Bike },
  ];

  // Update suggestions as user types
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const filtered = mockData
      .filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((item: any) => ({
        id: String(item.id),
        name: item.name,
        route: `/product/${item.id}` // or adjust route logic as needed
      }));
    setSuggestions(filtered.slice(0, 5)); // show max 5 suggestions
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (route: string) => {
    navigate(route);
    setSearchOpen(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <>
      {/* Top Banner */}
      <Link
        to="/deals"
        className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium block"
      >
        Labor Day Sale - Up to 40% Off →
      </Link>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <nav className="hidden md:flex items-center space-x-8">
              <HeaderNav />
              <a href="/Men" className="text-foreground hover:text-primary transition-colors font-medium">Men</a>
              <a href="/Women" className="text-foreground hover:text-primary transition-colors font-medium">Women</a>
              <a href="/Unisex" className="text-foreground hover:text-primary transition-colors font-medium">Unisex</a>
            </nav>

            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-[hsl(var(--decathlon-blue))]">DECATHLON</h1>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Search button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
                onClick={() => setSearchOpen(!searchOpen)}
              >
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
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* Desktop Secondary Navigation */}
<div className="hidden md:block border-t">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center space-x-8 py-3 overflow-x-auto">
      <Link to="/deals" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
        <Tag className="h-4 w-4" />
        <span>Deals</span>
      </Link>
      <Link to="/new-arrivals" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
        <Sparkles className="h-4 w-4" />
        <span>New Arrivals</span>
      </Link>
      <Link to="/all-products" className="flex items-center space-x-2 text-sm font-medium hover:text-primary">
        <BaggageClaimIcon className="h-4 w-4" />
        <span>All</span>
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.route}
          className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
        >
          {link.icon && <link.icon className="h-4 w-4" />}
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  </div>
</div>


        {/* Search Input with suggestions */}
        {searchOpen && (
          <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur z-50 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 relative">
              <form onSubmit={handleSearchSubmit} className="flex flex-col">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button type="submit" className="mt-2">
                  Search
                </Button>

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white border mt-1 rounded-md shadow-lg z-50">
                    {suggestions.map((item: Product) => (
                      <li
                        key={item.id}
                        className="px-3 py-2 hover:bg-primary/10 cursor-pointer"
                        onClick={() => handleSuggestionClick(item.route)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <nav className="flex flex-col px-4 py-2 space-y-2">
              <Link
                to="/deals"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Tag className="h-4 w-4" />
                <span>Deals</span>
              </Link>
              <Link
                to="/new-arrivals"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>New Arrivals</span>
              </Link>
              <Link
                to="/all-products"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BaggageClaimIcon className="h-4 w-4" />
                <span>All</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.route}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default DecathlonHeader;
