import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="space-y-10 w-full container px-4 lg:px-20">
        <section className="flex justify-center lg:justify-between items-center flex-col lg:flex-row w-full gap-8 lg:gap-0">
          <section className="w-full lg:w-1/2">
            <div className="w-full lg:w-4/6">
              <p className="text-5xl font-bold ">
                <span className="text-green-400 italic font-semibold">
                  Fresh{" "}
                </span>
                Food With Good
                <span className="text-orange-400 italic font-semibold">
                  {" "}
                  Taste
                </span>
              </p>
              <p className="py-4">
                Are you ready to transform your health and vitality one
                delicious meal at a time? Look no further than Ceebo healthmonk
                – your ultimate destination for nutritious, mouthwatering meals
                that fuel your body and delight your taste buds.
              </p>
            </div>

            <div className="bg-[#FF9426] text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <button className="font-bold text-xl ">Order Now</button>
            </div>
          </section>
          <section className="bg-orange-200 w-full lg:w-1/2 rounded-3xl px-0 py-0 relative">
            <div className="w-full ">
              <img
                src="./images/salad-bowl.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className="absolute top-4 lg:top-8  -left-0 lg:-left-20 ">
              <div className="flex justify-center items-center bg-white border rounded-xl px-4 lg:px-8 py-2 gap-4">
                <div className="bg-orange-200 rounded-full p-3 lg:p-4">
                  <div className="w-8 lg:w-10">
                    <img
                      src="./images/hero-section-frame.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="font-semibold">
                  <p className="text-[#FF9426] text-3xl ">150+</p>
                  <p>Trusted Customers</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 lg:bottom-20 -right-0 lg:-right-20 ">
              <div className="flex justify-center items-center bg-white border rounded-xl px-4 lg:px-8 py-2 gap-4">
                <div className="bg-orange-200 rounded-full p-3 lg:p-4">
                  <div className="w-8 lg:w-10">
                    <img
                      src="./images/hero-section-group.png"
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="font-semibold">
                  <p className="text-[#FF9426] text-3xl ">50+</p>
                  <p>Curated Meals</p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section>
          <BottomHeroSection />
        </section>
      </div>
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
      <div className="flex justify-center items-center gap-4  w-5/6 bg-white shadow-lg rounded-3xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center items-center w-full `}
            >
              <div className="flex justify-center items-center flex-col gap-4">
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
              {/* Conditionally render the line image only if it's not the last item */}
              {/* {index !== data.length - 1 && (
              <div className="w-1">
                <img
                  src={"/images/hero-line.png"}
                  alt={""}
                  className="object-contain w-full h-full"
                />
              </div>
            )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    imageUrl: "./images/frame-1.png",
    description: "Freshly Prepared Food",
  },
  {
    id: 2,
    imageUrl: "./images/frame-2.png",
    description: "Dedicated to Taste",
  },
  {
    id: 3,
    imageUrl: "./images/frame-3.png",
    description: "Quality Ingredient Only",
  },
  {
    id: 4,
    imageUrl: "./images/frame-4.png",
    description: "Sweeten Wisely",
  },
];
