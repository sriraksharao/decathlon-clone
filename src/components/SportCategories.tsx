import { Mountain, Tent, Bike, Waves, Dumbbell, Snowflake, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
// import

const SportCategories = () => {
  const categories = [
    {
      name: "Hiking & Backpacking",
      image:
        // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7zKgbvH1COxozKctL47ztWpUqZ_gTbMWsg&s",
      description: "Explore trails with confidence",
    },
    {
      name: "Camping",
      image:
        // "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VJJJWsAerlfV7u3-LxXX15ilBh4JRlb2ig&s",
      description: "Gear for outdoor adventures",
    },
    {
      name: "Running",
      image:
        // "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxa-6xaChOIvSMYSC03RDKYucp6uc3MyclQ&s",
      description: "Performance for every mile",
    },
    {
      name: "Cycling",
      image:
        // "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4UUdCIBnC_DiVJ7lXvFbuG0lZQuxDsa6og&s",
        // "https://marmot-tours.co.uk/wp-content/uploads/2024/03/Cime-de-la-bonette-cycling-climb-marmot-tours-001-1.jpg",
        "https://plus.unsplash.com/premium_photo-1713184149461-69b0abeb3daa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Ride with passion",
    },
    // {
    //   name: "Swimming",
    //   image:
    //     "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=80",
    //   description: "Dive into performance",
    // },
    // {
    //   name: "Fitness",
    //   image:
    //     "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=600&q=80",
    //   description: "Train like a champion",
    // },
    // {
    //   name: "Winter Sports",
    //   image:
    //     "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Conquer the slopes",
    // },
    // {
    //   name: "Team Sports",
    //   image:
    //     "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
    //   description: "Play together, win together",
    // },
  ];



  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-muted-foreground uppercase tracking-wide">
            Shop by Sport
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={category.name}>

            <div
              key={category.name}
              className="group rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-border relative overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-white/90 group-hover:text-black group-hover:font-bold">{category.description}</p>
              </div>
            </div>
          </Link>

          ))}
        </div>
      </div>
      </section>
    );
  };

export default SportCategories;