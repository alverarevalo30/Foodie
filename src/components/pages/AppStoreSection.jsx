import React from "react";
import googleplay from "../../assets/google-play.png";
import appstore from "../../assets/app-store.png";
import mobilebike from "../../assets/mobile-bike.gif";
import { motion } from "motion/react";

const AppStoreSection = () => {
  return (
    <>
      <motion.div
        className="bg-gray px-4 sm:px-12 mx-auto py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-muted px-3">
              FOODIE is Available on Android and IOS
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
              <a href="/">
                <img
                  src={googleplay}
                  alt="Google Play Logo"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="/">
                <img
                  src={appstore}
                  alt="App Store Logo"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
          <div>
            <img src={mobilebike} alt="gif" className="max-w-[300px] mx-auto" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AppStoreSection;
