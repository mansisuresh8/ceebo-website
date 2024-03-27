import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <header className="flex justify-start items-center flex-col fixed z-50 bg-[#FFEFE0]/80 backdrop-blur-lg w-full">
      <div className="flex justify-between items-center py-4 text-black w-full  container px-4 lg:px-20">
        <section className="flex justify-start items-center gap-4">
          <div className="w-10 lg:w-16">
            <img
              src="./images/logo.webp"
              alt=""
              className="rounded-full object-contain w-full"
            />
          </div>
        </section>
        <section className="flex justify-center items-center gap-4 cursor-pointer">
          <div className="lg:hidden">
            <div onClick={handleClick} className="text-2xl">
              {!isMobile ? <IoMenu /> : <IoClose />}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center gap-6 text-xl">
            <p className="hover:text-orange-600">About</p>
            <p className="hover:text-orange-600">Plans</p>
            <p className="hover:text-orange-600">Testimonials</p>
            <p className="hover:text-orange-600">Gallery</p>
          </div>
        </section>
        <section className="hidden lg:block">
          <div className="bg-[#FF9426] text-white rounded-full border border-orange-6 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <button className="font-bold">Order Now</button>
          </div>
        </section>
      </div>

      {isMobile && (
        <div className="w-full h-screen">
          <MobileNavbar />
        </div>
      )}
    </header>
  );
}

export default Header;

const MobileNavbar = () => {
  return (
    <div className="mt-8 h-full">
      <div className="lg:hidden flex justify-center items-center flex-col gap-6 text-xl w-full">
        <p className="hover:text-orange-600">About</p>
        <p className="hover:text-orange-600">Plans</p>
        <p className="hover:text-orange-600">Testimonials</p>
        <p className="hover:text-orange-600">Gallery</p>
      </div>
    </div>
  );
};
