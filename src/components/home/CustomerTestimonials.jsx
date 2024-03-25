import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import StarRating from "../StarRating";

const CustomerTestimonials = () => {
  const congfig = {
    slidesPerView: 1,
    spaceBetween: 10,

    modules: [Autoplay, Pagination],
    loop: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div>
      <section className="flex justify-center items-center flex-col lg:flex-row">
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="text-3xl font-bold">Customer Testimonials</p>
          <div className="flex justify-center items-center w-full">
            <div className="w-3/4 h-1 bg-[#FF9426]"></div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <section className="cursor-pointer">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={true}
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              950: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-8 py-8 items-center">
                <div className="w-full flex justify-center items-center">
                  <div className="w-36">
                    <img
                      src="./images/CustomerTestimonials-1.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="font-semibold text-lg">Anita Sandhvi</p>
                  <p className="py-4">
                    “Ceebo Healthmonk has simplified my life by delivering
                    nutritious meals to my doorstep, saving me time and effort.”
                    Thank you, Ceebo Healthmonk, for simplifying my life!"
                  </p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <StarRating rating={3.3} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-8 py-8 items-center">
                <div className="w-full flex justify-center items-center">
                  <div className="w-36">
                    <img
                      src="./images/CustomerTestimonials-2.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="font-semibold text-lg">Harsh Mehta</p>
                  <p className="py-4">
                    It's incredible how they've managed to strike the perfect
                    balance between health and taste. Thanks to them, eating
                    well has never been easier or more enjoyable!"
                  </p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <StarRating rating={5.0} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-8 py-8 items-center">
                <div className="w-full flex justify-center items-center">
                  <div className="w-36">
                    <img
                      src="./images/CustomerTestimonials-3.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="font-semibold text-lg">Shrushti Nanda</p>
                  <p className="py-4">
                    "Ceebo Healthmonk has exceeded my expectations in every way.
                    From the freshness of ingredients to the variety of flavors,
                    each meal is a delightful experience.
                  </p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <StarRating rating={3.3} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-8 py-8 items-center">
                <div className="w-full flex justify-center items-center">
                  <div className="w-36">
                    <img
                      src="./images/CustomerTestimonials-1.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="font-semibold text-lg">Mili Thakur</p>
                  <p className="py-4">
                    Their convenient delivery service brings delicious and
                    nutritious meals right to my doorstep. Thank you, Ceebo
                    Healthmonk, for simplifying my life!"
                  </p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <StarRating rating={4.3} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
