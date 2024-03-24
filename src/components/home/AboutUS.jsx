import React from "react";

const AboutUS = () => {
  return (
    <div className="">
      <section className="flex justify-between items-center px-10">
        <div className="">
          <img src="./images/aboutImage-1.png" alt="" className="" />
        </div>
        <div className="">
          <div>
            <img src="./images/aboutImage-2.png" alt="" />
          </div>
          <div>
            <img src="./images/aboutImage-3.png" alt="" />
          </div>
        </div>
        <section>
          <div className=" ">
            <p className="text-3xl font-bold underline underline-offset-8">About Us</p>
            <p className="py-4">
              At Ceebo, we're passionate about making healthy eating accessible
              and enjoyable for everyone. Whether you're a busy professional, a
              fitness enthusiast, or simply someone who wants to prioritize
              their health, we're here to support you on your journey. Our team
              of culinary experts and nutritionists work tirelessly to create a
              diverse menu of meals that cater to a variety of dietary needs and
              preferences.
            </p>
          </div>
          <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <button className="font-bold text-xl ">Know More</button>
          </div>
          <div>

          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUS;
