import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-10 w-full container px-4 lg:px-20">
      <section className="flex justify-center lg:justify-between items-center flex-col lg:flex-row w-full">
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
              Are you ready to transform your health and vitality one delicious
              meal at a time? Look no further than Ceebo healthmonk – your
              ultimate destination for nutritious, mouthwatering meals that fuel
              your body and delight your taste buds.
            </p>
          </div>

          <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <button className="font-bold text-xl ">Order Now</button>
          </div>
        </section>
        <section className="bg-orange-200 w-full lg:w-1/2 rounded-3xl px-0 py-0 relative">
          <div className="w-full ">
            <img
              src="/public/images/salad-bowl.png"
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute top-8 -left-20 ">
            <div className="flex justify-center items-center bg-white border rounded-xl px-8 py-2 gap-4">
              <div className="bg-orange-200 rounded-full px-4 py-4">
                <div className="w-10">
                  <img
                    src="./images/heroSection-frame.png"
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="font-semibold">
                <p className="text-orange-500 text-xl ">150+</p>
                <p>Trusted Customers</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 -right-20 ">
            <div className="flex justify-centeritems-center bg-white border rounded-xl px-8 py-2 gap-4 ">
              <div className="bg-orange-200 rounded-full px-4 py-4">
                <div className="w-10">
                  <img
                    src="./images/heroSection-group.png"
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="font-semibold">
                <p className="text-orange-500 text-xl ">50+</p>
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
    imageUrl: "/images/frame-1.png",
    description: "Freshly Prepared Food",
  },
  {
    id: 2,
    imageUrl: "/images/frame-2.png",
    description: "Dedicated to Taste",
  },
  {
    id: 3,
    imageUrl: "/images/frame-3.png",
    description: "Quality Ingredient Only",
  },
  {
    id: 4,
    imageUrl: "/images/frame-4.png",
    description: "Sweeten Wisely",
  },
];
