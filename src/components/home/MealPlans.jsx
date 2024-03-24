import React from "react";

function MealPlans() {
  return (
    <div>
      <section className="flex justify-center items-center ">
      <div className="flex justify-start items-start flex-col gap-2">
            <p className="text-3xl font-bold">Meal Plans</p>
            <div className="w-3/4 h-1 bg-orange-600"></div>
          </div>
      </section>
      <section className="flex justify-between items-center flex-col lg:flex-row px-8 py-8">
        <div className="bg-white rounded-3xl ">
          <div>
            <div className="">
              <img
                src="./images/mealPlans-1.png"
                alt=""
                className="object-contain w-full"
              />
            </div>

            <div className="text-center font-semibold text-2xl">
              <p>Keto Meal</p>
            </div>
            <div className="py-10 px-16">
              <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="font-bold text-xl ">Order Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src="./images/mealPlans-2.png" alt="" />
        </div>
        <div>
          <img src="./images/mealPlans-3.png" alt="" />
        </div>

        <div>
          <img src="./images/mealPlans-4.png" alt="" />
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="bg-orange-600 text-center text-white rounded-full border border-orange-6 px-4 py-4 w-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <button className="font-bold text-xl ">See All</button>
        </div>
      </section>
    </div>
  );
}

export default MealPlans;
