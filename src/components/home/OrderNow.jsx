import React from "react";

const OrderNow = () => {
  return (
    <div className="">
      <section className="flex justify-center items-center">
        <div className="text-5xl font-bold underline underline-offset-8 ">
          <p>Order Now</p>
        </div>
      </section>
      <section className="flex justify-between items-center py-20">
        <div className="px-8 lg:px-20 text-2xl lg:text-5xl font-bold">
          <p>
            Get <span className="text-orange-600">20% </span>Discount on
          </p>
          <p className="py-4">First Order</p>
          <section className="py-4 lg:py-14">
            <div className="bg-white rounded-full  px-4 py-4 ">
              <div className="border border-orange-600 border-dashed rounded-full px-4 py-4">
                <button className="">
                  USE <span className="text-orange-600">CEEBOFIRST21</span>
                </button>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-96">
            <div>
              <img src="./images/OrderNow-1.png" alt="" />
            </div>
            <div className="lg:w-56">
              <img src="./images/OrderNow-2.png" alt="" />
            </div>
          </div>
        </div>
        <section className="w-80 lg:w-1/2">
          <div className="">
            <img src="./images/OrderNow.png" alt="" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default OrderNow;
