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
          <div className="flex justify-center items-center w-full">
            <div className="w-3/4 h-1 bg-[#FF9426]"></div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <section>
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
                spaceBetween: 40,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative group cursor-pointer pt-40 ">
                  <div className="absolute w-full -top-5 2xl:-top-28 left-1/2 transform -translate-x-1/2">
                    <div className="w-full">
                      <img
                        src={slide.imgSrc}
                        alt=""
                        className="object-contain w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl group-hover:bg-[#FF9426] h-96 lg:h-[30rem] 2xl:h-[36rem]">
                    <div className="flex justify-end items-center flex-col h-full px-8 py-8">
                      <div className="text-center">
                        <p className="font-bold text-3xl">{slide.title}</p>
                      </div>
                      <div className="flex justify-center items-center w-full mt-16 px-8 lg:px-24 py-4">
                        <div className="bg-[#FF9426] group-hover:bg-white  text-center text-white group-hover:text-black rounded-full px-4 py-4 w-60 ease-in-out transition-all hover:-translate-y-1 hover:scale-110 duration-300">
                          <button className="font-bold text-xl">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      <section className="flex justify-center items-center">
        <div className="bg-[#FF9426] text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <button className="font-bold text-xl ">See All</button>
        </div>
      </section>
    </div>
  );
}

export default MealPlans;

const slidesData = [
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "Fresh Salads",
  },
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "High Protein Meals",
  },
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "Guilt Free Deserts",
  },
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "Fresh Salads",
  },
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "High Protein Meals",
  },
  {
    imgSrc: "./images/mealPlans-2.webp",
    title: "Guilt Free Deserts",
  },
];
