import React from "react";
import food1 from "../../assets/food1.svg";
import food2 from "../../assets/food2.svg";
import food3 from "../../assets/food3.svg";
import { motion } from "motion/react";

const ProductsData = [
  {
    id: 1,
    img: food1,
    name: "Starter Pack",
    description:
      "A versatile collection perfect for kickstarting your meals, offering quality and convenience in every bite.",
  },
  {
    id: 2,
    img: food2,
    name: "Everyday Essentials",
    description:
      "Reliable daily items crafted to meet your routine needs, with a balance of taste and nutrition.",
  },
  {
    id: 3,
    img: food3,
    name: "Premium Delights",
    description:
      "Curated for those who seek a little extra, this selection blends top-tier ingredients with refined flavor.",
  },
];

const ProductsSection = () => {
  return (
    <>
      <section className="md:py-10 py-6" id="products">
        <div className="container px-4 sm:px-12 mx-auto py-10">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Products
            </h1>
            <p className="mt-4 text-xs text-muted">
              Discover a curated selection of items designed to bring
              convenience, flavor, and joy to your table. Whether you're
              planning a meal or stocking up, our collection offers quality and
              freshness you can trust.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-5 place-items-center">
              {ProductsData.map(({ id, img, name, description }, index) => {
                return (
                  <motion.div
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-background hover:bg-primary hover:text-color-black duration p-4 shadow-xl bg-gray"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt="Food Image"
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-10 duration-300"
                      />
                    </div>
                    <div className="mt-2 p-4 text-center">
                      <h1 className="text-xl font-bold"> {name}</h1>
                      <p className="text-muted group-hover:text-color-black duration-300 text-sm line-clamp-2">
                        {" "}
                        {description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
