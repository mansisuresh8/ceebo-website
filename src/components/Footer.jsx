import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-center gap-8 bg-orange-200 px-4 py-8 w-full">
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="w-full lg:w-1/2">
          <section className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="w-28 md:w-60">
              <img
                src="./assets/logo.png"
                alt=""
                className="rounded-full object-contain w-full"
              />
            </div>
            <div className="md:text-lg text-sm mx-4 w-full">
              <p className="font-bold">
                Have questions, feedback, or just want to say hello?
              </p>
              <p>
                We're here for you! Reach out to us anytime and let's start a
                conversation about how we can help you on your journey to
                wellness. Let's connect and explore the possibilities together.
              </p>
            </div>
          </section>
        </div>

        <div className="w-full lg:w-1/2">
          <section className="flex justify-center items-center">
            <div className="space-y-2">
              <p className="font-bold text-xl">Subscribe</p>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-40 md:w-full px-4 size-10"
                />
                <button className="bg-orange-600 text-white rounded-full border border-orange-6 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300font-bold text-xl">
                  Subsribe
                </button>
              </div>
              <p>
                By subscribing you agree to with our{" "}
                <a href="" className="underline font-semibold">
                  Privacy Policy
                </a>
              </p>
            </div>
          </section>
          <section className="flex justify-center items-center text-3xl">
            <div className=" flex flex-row justify-between items-center gap-4 py-4 pb-0">
              <div className="">
                <FaFacebook />
              </div>

              <div className="">
                <FaInstagram />
              </div>

              <div className="">
                <FaXTwitter />
              </div>

              <div className="">
                <FaLinkedin />
              </div>

              <div className="">
                <FaYoutube />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center border-t-2 border-black w-full px-8 py-8">
        <div className="flex flex-row justify-between items-center gap-4">
          <p className="underline">Privacy Policy</p>
          <p className="underline">Terms of Service</p>
          <p className="underline">Cookies Settings</p>
        </div>
        <div className="py-4">
          <p>© 2023 Relume. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );  
};

export default Footer;
 