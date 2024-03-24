import React from "react";

const OrderNow = () => {
  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="text-3xl font-bold underline underline-offset-8">
          <p>Order Now</p>
        </div>
      </section>
      <section className="flex justify-between items-center py-20">
        <div className="px-20 text-5xl font-bold">
          <p>
            Get <span className="text-orange-600">20% </span>Discount on First
            Order
          </p>
          <div className="border py-16">
            <button>USE CEEBOFIRST21</button>
          </div>
          <div className="grid grid-cols-2 w-96">
            <div>
              <img src="./images/OrderNow-1.png" alt="" />
            </div>
            <div>
              <img src="./images/OrderNow-2.png" alt="" />
            </div>
          </div>
        </div>
        <section className="w-1/2">
          <div>
            <img src="./images/OrderNow.png" alt="" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default OrderNow;
