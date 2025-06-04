import React, { Suspense } from "react";
import Navbar from "./components/pages/Navbar";
import HeroSection from "./components/pages/HeroSection";
import ProductsSection from "./components/pages/ProductsSection";
import { ThemeProvider } from "./components/ThemeContext";
import BannerSection from "./components/pages/BannerSection";
import Footer from "./components/pages/Footer";

const App = () => {
  const ReviewsSection = React.lazy(() =>
    import("./components/pages/ReviewsSection")
  );
  const AppStoreSection = React.lazy(() =>
    import("./components/pages/AppStoreSection")
  );

  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="pt-16 md:pt-18">
            <HeroSection />
            <ProductsSection />
            <BannerSection />
            <Suspense
              fallback={
                <div className="text-center py-10 text-muted">
                  Loading reviews...
                </div>
              }
            >
              <AppStoreSection />
              <ReviewsSection />
            </Suspense>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
