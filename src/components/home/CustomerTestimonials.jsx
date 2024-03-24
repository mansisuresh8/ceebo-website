import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

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
          <div className="w-3/4 h-1 bg-orange-600"></div>
        </div>
      </section>

      <div className="py-16">
        <section>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={true}
            modules={[Autoplay,Pagination]}
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
                  </p>
                </div>
                {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
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
                  <p className="font-semibold text-lg">Anita Sandhvi</p>
                  <p className="py-4">
                    “Ceebo Healthmonk has simplified my life by delivering
                    nutritious meals to my doorstep, saving me time and effort.”
                  </p>
                </div>
                {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
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
                  <p className="font-semibold text-lg">Anita Sandhvi</p>
                  <p className="py-4">
                    “Ceebo Healthmonk has simplified my life by delivering
                    nutritious meals to my doorstep, saving me time and effort.”
                  </p>
                </div>
                {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
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
                  <p className="font-semibold text-lg">Anita Sandhvi</p>
                  <p className="py-4">
                    “Ceebo Healthmonk has simplified my life by delivering
                    nutritious meals to my doorstep, saving me time and effort.”
                  </p>
                </div>
                {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
