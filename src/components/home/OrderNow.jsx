import React from "react";

const OrderNow = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center flex-col container px-4 lg:px-20">
      <section className="flex justify-center items-center">
        <div className="flex justify-start items-start flex-col gap-2">
          <p className="text-3xl font-bold">Order Now</p>
          <div className="flex justify-center items-center w-full">
            <div className="w-3/4 h-1 bg-[#FF9426]"></div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 py-20">
        <div className="px-8 lg:px-20">
          <p className=" text-2xl lg:text-5xl font-bold">
            Get <span className="text-[#FF9426]">20% </span>Discount on
          </p>
          <p className="py-4 text-2xl lg:text-5xl font-bold">First Order</p>
          <section className="py-2 lg:py-14 flex justify-center lg:justify-start items-center">
            <div className="bg-white rounded-full px-4  py-4">
              <div className="border border-[#FF9426] border-dashed rounded-full px-6 py-4">
                <button className="text-xl lg:text-4xl font-bold whitespace-nowrap">
                  USE <span className="text-[#FF9426]">CEEBOFIRST21</span>
                </button>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full cursor-pointer">
            <div className=" w-full">
              <img
                src="./images/order-now-1.webp"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className=" w-full">
              <img
                src="./images/order-now-2.webp"
                alt=""
                className="object-contain w-full" 
              />
            </div>
          </div>
        </div>
        <section className="w-full">
          <div className="">
            <img
              src="./images/order-now-3.webp"
              alt=""
              className="object-contain w-full"
            />
          </div>
        </section>
      </section>
    </div>
    </div>
  );
};

export default OrderNow;
