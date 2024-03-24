import React from "react";

const OrderNow = () => {
  return (
    <div className="">
      <section className="flex justify-center items-center">
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="text-3xl font-bold">Order Now</p>
          <div className="w-3/4 h-1 bg-orange-600"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 py-20">
        <div className="px-8 lg:px-20">
          <p className=" text-2xl lg:text-5xl font-bold">
            Get <span className="text-orange-600">20% </span>Discount on
          </p>
          <p className="py-4 text-2xl lg:text-5xl font-bold">First Order</p>
          <section className="py-2 lg:py-14 flex justify-center lg:justify-start items-center">
            <div className="bg-white rounded-full px-4  py-4">
              <div className="border border-orange-600 border-dashed rounded-full lg:px-4 px-2 lg:py-4 ">
                <button className="text-2xl lg:text-5xl font-bold">
                  USE <span className="text-orange-600">CEEBOFIRST21</span>
                </button>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className=" w-full">
              <img
                src="./images/OrderNow-1.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className=" w-full">
              <img
                src="./images/OrderNow-2.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
          </div>
        </div>
        <section className="w-full">
          <div className="">
            <img
              src="./images/OrderNow.png"
              alt=""
              className="object-contain w-full"
            />
          </div>
        </section>
        ` `
      </section>
    </div>
  );
};

export default OrderNow;
