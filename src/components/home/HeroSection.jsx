import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="flex justify-between items-center py-20 px-28 Gilroy-Medium ">
        <div className="">
          <p className="text-5xl font-bold ">
            <span className="text-green-400 italic font-semibold">Fresh</span>{" "}
            Food With{" "}
          </p>
          <p className="text-5xl font-bold py-4">
            Good{" "}
            <span className="text-orange-400 italic font-semibold">Taste</span>
          </p>
          <p className="w-96 py-4">
            Are you ready to transform your health and vitality one delicious
            meal at a time? Look no further than Ceebo healthmonk – your
            ultimate destination for nutritious, mouthwatering meals that fuel
            your body and delight your taste buds.
          </p>
          <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <button className="font-bold text-xl ">Order Now</button>
          </div>
        </div>
        <section className="bg-orange-200 rounded-3xl px-28 py-28">
          <div className="">
            <img src="/public/images/salad-bowl.png" alt="" className="" />
          </div>
        </section>
      </section>

      <section className=" w-full flex justify-center items-center">
        <div className="flex justify-between items-center w-5/6 bg-white rounded-3xl">
          <div className="w-40 px-4 py-4">
            <img src="/public/images/frame-1.png" alt="" />
            <p>Freshly Prepared Food</p>
          </div>
          <div className="w-40 px-4 py-4">
            <img src="/public/images/frame-2.png" alt="" />
            <p>Dedicated to Taste</p>
          </div>
          <div className="w-40 px-4 py-4">
            <img src="/public/images/frame-3.png" alt="" />
            <p>Quality Ingredient Only</p>
          </div>
          <div className="w-40 px-4 py-4">
            <img src="/public/images/frame-4.png" alt="" />
            <p>Sweeten Wisely</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
