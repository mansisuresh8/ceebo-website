import React from "react";

function MealPlans() {
  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="text-3xl font-bold underline underline-offset-8">
          <p>Meal Plans</p>
        </div>
      </section>
      <section className="flex justify-between items-center px-8 py-8">
        <div className="bg-white rounded-3xl ">
          <div className="">
            <div>
              <img src="./images/mealPlans-1.png" alt="" />
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
          <button className="font-bold text-xl ">Know More</button>
        </div>
</section>
    </div>
  );
}

export default MealPlans;
