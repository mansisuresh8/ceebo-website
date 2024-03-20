import React from "react";

function Home() {
  return (
    // Hero Section

    <div>
      <section className="flex justify-between items-center bg-white py-20 px-28 Gilroy-Medium ">
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
        <div className="">

        </div>
      </section>
    </div>
  );
}

export default Home;
