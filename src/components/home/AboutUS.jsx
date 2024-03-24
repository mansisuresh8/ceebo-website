import React from "react";

const AboutUS = () => {
  return (
    <div className="">
      <section className="flex justify-between items-center px-20 py-4">
        <div className="">
          <img src="./images/aboutImage-1.png" alt="" className="" />
        </div>
        <div className="">
          <div className="w-96">
            <img src="./images/aboutImage-2.png" alt="" />
          </div>
          <div className="w-96">
            <img src="./images/aboutImage-3.png" alt="" />
          </div>
        </div>
        <section>
          <div className=" ">
            <p className="text-3xl font-bold underline underline-offset-8">
              About Us
            </p>
            <div className="px-4 py-4">
              <p>
                At Ceebo, we're passionate about making healthy eating
                accessible and enjoyable for everyone. Whether you're a busy
                professional, a fitness enthusiast, or simply someone who wants
                to prioritize their health, we're here to support you on your
                journey.
              </p>
              <p>
                Our team of culinary experts and nutritionists work tirelessly
                to create a diverse menu of meals that cater to a variety of
                dietary needs and preferences.
              </p>
            </div>
          </div>
          <section className="py-16">
            <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <button className="font-bold text-xl ">Know More</button>
            </div>
          </section>
          <div></div>
        </section>
      </section>
    </div>
  );
};

export default AboutUS;
