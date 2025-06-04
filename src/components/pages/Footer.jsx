import React from "react";
import Logo from "../../assets/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray" id="contact">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 p-5 gap-0 sm:gap-5">
            <div className="p-4 col-span-2">
              <div className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={Logo} alt="FOODIE Logo" className="max-w-[50px]" />
                <h1>FOODIE</h1>
              </div>
              <p className=" mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <FaLocationArrow />
                <p> Location</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p> Number</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="https://www.instagram.com">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex text-xl sm:text-2xl font-bold text-justify sm:text-left">
                <h1>Navigation</h1>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="/home">Home</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#products">Products</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#reviews">Reviews</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4">
              <div className="flex text-xl sm:text-2xl font-bold text-justify sm:text-left">
                <h1>Support</h1>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="/home">FAQ</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#products">Terms & Conditions</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#reviews">Privacy Policy</a>
              </div>
              <div className="flex text-md sm:text-xl hover:underline">
                <a href="#contact">Help Center</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
