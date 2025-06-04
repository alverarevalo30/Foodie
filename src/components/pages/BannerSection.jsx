import React from "react";
import food1 from "../../assets/food1.svg";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { motion } from "motion/react";

const BannerSection = () => {
  return (
    <>
      <motion.section
        className="md:py-10 py-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-4 sm:px-12 mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img
                src={food1}
                alt=""
                className="max-w-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)] "
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold px-4 sm:px-0 text-center sm:text-left">
                Made for Every Taste
              </h1>
              <p className="text-sm text-gray tracking-wide leading-5 px-10 sm:px-0 text-justify">
                Discover the perfect balance of quality, speed, and convenience.
                <br />
                <br />
                Whether you're fueling up for the day or winding down with a
                quick bite, our offerings are made to fit your lifestyle —
                fresh, satisfying, and always ready when you are.
              </p>
              <div className="flex gap-6 justify-center sm:justify-start">
                <div>
                  <GrSecure className="text-4xl h-16 w-16 lg:h-20 lg:w-20 shadow-sm p-5 rounded-full bg-purple" />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-16 w-16 lg:h-20 lg:w-20 shadow-sm p-5 rounded-full bg-orange" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-16 w-16 lg:h-20 lg:w-20 shadow-sm p-5 rounded-full bg-green" />
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BannerSection;
