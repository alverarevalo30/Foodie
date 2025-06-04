import React from "react";
import Navbar from "./components/pages/Navbar";
import HeroSection from "./components/pages/HeroSection";
import ProductsSection from "./components/pages/ProductsSection";
import { ThemeProvider } from "./components/ThemeContext";
import BannerSection from "./components/pages/BannerSection";
import AppStoreSection from "./components/pages/AppStoreSection";
import ReviewsSection from "./components/pages/ReviewsSection";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="pt-16 md:pt-18">
            <HeroSection />
            <ProductsSection />
            <BannerSection />
            <AppStoreSection />
            <ReviewsSection />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
