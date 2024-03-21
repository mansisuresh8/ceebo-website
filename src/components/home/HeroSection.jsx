import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-10">
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

<section>
<BottomHeroSection />
</section>
    </div>
  );
};

export default HeroSection;

// Normal fuction

// function BottomHeroSection() {

// }

// arrow Function

const BottomHeroSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-5/6 bg-white rounded-3xl px-16 py-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-4"
          >
            <div className="w-32">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="object-contain w-full"
              />
            </div>
            <div className="flex justify-center items-center w-3/4">
              <p className="text-center font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    imageUrl: "/public/images/frame-1.png",
    description: "Freshly Prepared Food",
  },
  {
    imageUrl: "/public/images/frame-2.png",
    description: "Dedicated to Taste",
  },
  {
    imageUrl: "/public/images/frame-3.png",
    description: "Quality Ingredient Only",
  },
  {
    imageUrl: "/public/images/frame-4.png",
    description: "Sweeten Wisely",
  },
];
