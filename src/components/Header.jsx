import React from "react";
import { IoMenu } from "react-icons/io5";



function Header() {
  return (
   <div className="flex justify-between items-center py-4 text-black w-full px-4 md:px-20 cursor-pointer">
    <section className="flex justify-start items-center gap-4">
        <div className="w-10 md:w-16"> 
            <img src="./assets/logo.png" alt="" className="rounded-full object-contain w-full"/>
        </div>
    </section>
    <section className="flex justify-center items-center gap-4 cursor-pointer">
    <div className="md:hidden">
          <IoMenu />
        </div>
        <div className="hidden md:flex justify-center items-center gap-6 text-xl">
          <p className="hover:text-orange-600">About</p>
          <p className="hover:text-orange-600">Plans</p>
          <p className="hover:text-orange-600">Testimonials</p>
          <p className="hover:text-orange-600">Gallery</p>
        </div>
    </section>
    <section className="hidden md:block">
      <div className="bg-[#FF9426] text-white rounded-full border border-orange-6 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
      <button className="font-bold">Order Now</button>
      </div>
    </section>
   </div>
  );
}

export default Header;
