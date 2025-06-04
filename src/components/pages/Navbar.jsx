import React, { useEffect, useState } from "react";
import Logo from "../../assets/food-logo.png";
import DarkMode from "../DarkMode";
import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 shadow-md bg-background text-foreground duration-200 px-4 sm:px-12 py-3 sm:py-2">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#home"
              className="flex items-center py-2 gap-2 text-2xl sm:text-3xl font-bold"
            >
              <img src={Logo} alt="FOODIE Logo" className="w-10" />
              FOODIE
            </a>
          </div>
          <div className="block md:hidden py-2">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border-2 rounded border-gray text-foreground hover:text-foreground hover:border-foreground"
              >
                <RxHamburgerMenu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border-2 rounded border-gray text-foreground hover:text-foreground hover:border-foreground"
              >
                <HiXMark className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0 items-center">
              <li className="bg-gray hover:bg-primary rounded-md">
                <a
                  href="#home"
                  className="inline-block py-2 px-4 hover:text-color-black"
                >
                  Home
                </a>
              </li>
              <li className="bg-gray hover:bg-primary rounded-md">
                <a
                  href="#products"
                  className="inline-block py-2 px-4 hover:text-color-black"
                >
                  Products
                </a>
              </li>
              <li className="bg-gray hover:bg-primary rounded-md">
                <a
                  href="#reviews"
                  className="inline-block py-2 px-4 hover:text-color-black"
                >
                  Reviews
                </a>
              </li>
              <li className="bg-gray hover:bg-primary rounded-md">
                <a
                  href="#contact"
                  className="inline-block py-2 px-4 hover:text-color-black"
                >
                  Contact
                </a>
              </li>
              <li>
                <DarkMode />
              </li>
            </ul>
            {/* <button className="bg-gradient-to-r from-primary to-secondary text-foreground px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
              Order
              <FaCartShopping className="text-xl text-foreground drop-shadow-sm cursor-pointer" />
            </button> */}
          </div>
        </div>
        {navbarOpen ? (
          <ul className="flex flex-col py-4 items-center gap-2">
            <li className="w-full text-center bg-gray hover:bg-primary rounded-md hover:font-bold">
              <a
                href="/"
                className="block w-full py-2 text-muted sm:text-xl hover:text-color-black"
              >
                Home
              </a>
            </li>
            <li className="w-full text-center bg-gray hover:bg-primary rounded-md hover:font-bold">
              <a
                href="#products"
                className="block w-full py-2 text-muted sm:text-xl hover:text-color-black"
              >
                Products
              </a>
            </li>
            <li className="w-full text-center bg-gray hover:bg-primary rounded-md hover:font-bold">
              <a
                href="#reviews"
                className="block w-full py-2 text-muted sm:text-xl hover:text-color-black"
              >
                Reviews
              </a>
            </li>
            <li className="w-full text-center bg-gray hover:bg-primary rounded-md hover:font-bold">
              <a
                href="#contact"
                className="block w-full py-2 text-muted sm:text-xl hover:text-color-black"
              >
                Contact
              </a>
            </li>
            <li className="py-1">
              <DarkMode />
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
