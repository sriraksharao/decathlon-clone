import React, { useState } from "react";
import { Link } from "react-router-dom";

const sports = [
  { name: "Hiking & Backpacking", route: "/hiking-backpacking" },
  { name: "Camping", route: "/camping" },
  { name: "Running", route: "/running" },
  { name: "Cycling", route: "/cycling" },
  // add more as needed
];

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden md:flex items-center space-x-8 relative">
      {/* Main Sports Link */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >
        <a
          href="/#sports"
          className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
        >
          Sports
        </a>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
            {sports.map((sport) => (
              <Link
                key={sport.route}
                to={sport.route}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              >
                {sport.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderNav;
