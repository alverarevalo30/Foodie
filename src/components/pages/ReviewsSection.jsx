import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import { motion } from "motion/react";

function useResponsiveWidth({
  minWidth = 300,
  maxWidth = 600,
  relativeWidth = 0.7,
} = {}) {
  const [width, setWidth] = useState(minWidth);

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      const calculatedWidth = screenWidth * relativeWidth;

      const clampedWidth = Math.min(
        Math.max(calculatedWidth, minWidth),
        maxWidth
      );
      setWidth(clampedWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [minWidth, maxWidth, relativeWidth]);

  return width;
}

const ReviewsSection = () => {
  const baseWidth = useResponsiveWidth({
    minWidth: 300,
    maxWidth: 600,
    relativeWidth: 0.7,
  });
  return (
    <>
      <motion.section
        className="py-10"
        id="reviews"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-4 sm:px-12 mx-auto py-10">
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Reviews
            </h1>
            <p className="mt-4 text-xs text-muted">
              Hear from our happy customers! From quick bites to full meals,
              discover why people keep coming back for more. Real stories, real
              satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6 justify-items-center">
            <Carousel
              baseWidth={baseWidth}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ReviewsSection;
