import React from "react";

const AboutUS = () => {
  return (
    <div className="flex justify-between items-center container px-4 lg:px-20 ">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="w-full lg:col-span-2 flex justify-center items-center">
          <div className="w-full">
            <img
              src="./images/aboutImage-1.png"
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="w-2/3">
            <div className="w-full">
              <img
                src="./images/aboutImage-2.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className="w-full">
              <img
                src="./images/aboutImage-3.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-start flex-col">
          <div className="flex justify-start items-start flex-col gap-2">
            <p className="text-3xl font-bold">About Us</p>
            <div className="w-3/4 h-1 bg-orange-600"></div>
          </div>
          <div className="px-4 py-4">
            <p>
              At Ceebo, we're passionate about making healthy eating accessible
              and enjoyable for everyone. Whether you're a busy professional, a
              fitness enthusiast, or simply someone who wants to prioritize
              their health, we're here to support you on your journey.
            </p>
            <p>
              Our team of culinary experts and nutritionists work tirelessly to
              create a diverse menu of meals that cater to a variety of dietary
              needs and preferences.
            </p>
          </div>

          <section className="py-16">
            <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <button className="font-bold text-xl ">Know More</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
