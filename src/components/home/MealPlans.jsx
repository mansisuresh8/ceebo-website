import React from "react";

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
};
function MealPlans() {
  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="text-3xl font-bold">Meal Plans</p>
          <div className="w-3/4 h-1 bg-orange-600"></div>
        </div>
      </section>

      <div className="py-16">
        <section >
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
              <div className="relative group cursor-pointer">
                <div className="absolute w-full -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-full ">
                    <img
                      src="./images/mealPlans-1.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-3xl pt-60 lg:pt-96 group-hover:bg-[#FF9426]">
                  <div className="px-8 py-8">
                    <div className="text-center ">
                      <p className="font-bold text-4xl">Keto Meal</p>
                    </div>
                    <div className="mt-16 px-8 lg:px-24 py-4">
                      <div className="bg-[#FF9426] group-hover:bg-white  text-center text-white group-hover:text-black rounded-full px-4 py-4 w-60 ease-in-out transition-all hover:-translate-y-1 hover:scale-110 duration-300">
                        <button className="font-bold text-xl ">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group cursor-pointer">
                <div className="absolute w-full -top-12 lg:-top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-full ">
                    <img
                      src="./images/mealPlans-2.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-3xl pt-60 lg:pt-96 group-hover:bg-[#FF9426]">
                  <div className="px-8 py-8">
                    <div className="text-center ">
                      <p className="font-bold text-4xl">Keto Meal</p>
                    </div>
                    <div className="mt-16 px-8 lg:px-24 py-4">
                      <div className="bg-[#FF9426] group-hover:bg-white  text-center text-white group-hover:text-black rounded-full px-4 py-4 w-60 ease-in-out transition-all hover:-translate-y-1 hover:scale-110 duration-300">
                        <button className="font-bold text-xl ">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group cursor-pointer">
                <div className="absolute w-full -top-20 lg:-top-28 left-1/2 transform -translate-x-1/2">
                  <div className="w-full ">
                    <img
                      src="./images/mealPlans-3.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-3xl pt-60 lg:pt-96 group-hover:bg-[#FF9426]">
                  <div className="px-8 py-8">
                    <div className="text-center ">
                      <p className="font-bold text-4xl">Keto Meal</p>
                    </div>
                    <div className="mt-16 px-8 lg:px-24 py-4">
                      <div className="bg-[#FF9426] group-hover:bg-white  text-center text-white group-hover:text-black rounded-full px-4 py-4 w-60 ease-in-out transition-all hover:-translate-y-1 hover:scale-110 duration-300">
                        <button className="font-bold text-xl ">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group cursor-pointer">
                <div className="absolute w-full -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-full ">
                    <img
                      src="./images/mealPlans-4.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-3xl pt-60 lg:pt-96 group-hover:bg-[#FF9426]">
                  <div className="px-8 py-8">
                    <div className="text-center ">
                      <p className="font-bold text-4xl">Keto Meal</p>
                    </div>
                    <div className="mt-16 px-8 lg:px-24 py-4">
                      <div className="bg-[#FF9426] group-hover:bg-white  text-center text-white group-hover:text-black rounded-full px-4 py-4 w-60 ease-in-out transition-all hover:-translate-y-1 hover:scale-110 duration-300">
                        <button className="font-bold text-xl ">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>
      </div>

      <section className="flex justify-center items-center">
        <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <button className="font-bold text-xl ">See All</button>
        </div>
      </section>
    </div>
  );
}

export default MealPlans;
