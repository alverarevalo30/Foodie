import React, { useState } from "react";
import food1 from "../../assets/food1.svg";
import food2 from "../../assets/food2.svg";
import food3 from "../../assets/food3.svg";
import { motion } from "motion/react";

const ImageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  },
];

const HeroSection = () => {
  const [imageId, setImageId] = useState(food1);

  return (
    <>
      <div
        className=" bg-hero min-h-[550px] sm:min-h-[800px] bg-gray dark:bg-gray dark:text-foreground duration-200 flex justify-center items-center"
        id="home"
      >
        <div className="container px-4 sm:px-12 mx-auto pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to FOODIE
              </h1>
              <p className="text-sm">
                Discover a smarter way to satisfy your cravings. FOODIE connects
                you with top-rated kitchens and delivers quality meals right to
                your door—fast, fresh, and hassle-free. Wherever you are, we
                bring convenience and flavor together.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-foreground px-4 py-2 rounded-full hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </motion.div>
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              <motion.div
                className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden"
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                style={{ transformOrigin: "center right" }}
              >
                <img
                  src={imageId}
                  alt="Food Image"
                  className="w-[300px] sm:w-[450px] mx-auto spin"
                />
              </motion.div>
              <motion.div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:p-2 justify-center absolute bottom-[0px] gap-2 lg:-right-10 bg-background/30 rounded-full"
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "center right" }}
              >
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="max-w-[75px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? food1 : item.id === 2 ? food2 : food3
                      );
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
