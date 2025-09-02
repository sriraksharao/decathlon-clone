import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewArrivals from "./pages/NewArrivals";
import DecathlonHeader from "./components/DecathlonHeader";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import CartPage from "./pages/CartPage";
import Hiking from "./pages/Hiking";
import Camping from "./pages/Camping";
import Cycling from "./pages/Cycling";
import Running from "./pages/Running";
import AllProducts from "./pages/AllProducts";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Unisex from "./pages/Unisex";
import Deals from "./pages/Deals";
import Sports from "./pages/Sports";
import { DefaultSerializer } from "v8";
import Footer from "./components/Footer";
import Product from "./pages/Product";


const queryClient = new QueryClient();

// export default function App(){
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <CartProvider>
//           <BrowserRouter>
//             <DecathlonHeader />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/new-arrivals" element={<NewArrivals />} />
//               <Route path="/cart" element={<CartPage></CartPage>}></Route>
//               <Route path="/Sports" element={<Sports />} />
//               <Route path="/men" element={<Men />} />
//               <Route path="/women" element={<Women />} />
//               <Route path="/unisex" element={<Unisex />} />
//               <Route path="/hiking-backpacking" element={<Hiking />} />
//               <Route path="/camping" element={<Camping />} />
//               <Route path="/cycling" element={<Cycling />} />
//               <Route path="/running" element={<Running />} />
//               <Route path="/all-products" element={<AllProducts />} />
//               <Route path="/deals" element={<Deals />} />
//               <Route path="*" element={<NotFound />} />

//             </Routes>
//           </BrowserRouter>
//         </CartProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CartProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              {/* Header */}
              <DecathlonHeader />

              {/* Main Content */}
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/new-arrivals" element={<NewArrivals />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/Sports" element={<Sports />} />
                  <Route path="/men" element={<Men />} />
                  <Route path="/women" element={<Women />} />
                  <Route path="/unisex" element={<Unisex />} />
                  <Route path="/hiking-backpacking" element={<Hiking />} />
                  <Route path="/camping" element={<Camping />} />
                  <Route path="/cycling" element={<Cycling />} />
                  <Route path="/running" element={<Running />} />
                  <Route path="/all-products" element={<AllProducts />} />
                  <Route path="/deals" element={<Deals />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/product/:id" element={<Product></Product>}></Route>
                </Routes>
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
