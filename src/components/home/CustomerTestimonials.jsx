import React from "react";

const CustomerTestimonials = () => {
  return (
    <div>
      <section className="flex justify-center items-center ">
        <div className="text-3xl font-bold underline underline-offset-8">
          <p>Customer Testimonials</p>
        </div>
      </section>
      <div className="flex justify-between items-center py-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 px-8 gap-4">
          <div className="bg-white rounded-3xl px-8 py-8 items-center">
            <div className="w-36">
              <img src="./images/CustomerTestimonials-1.png" alt="" />
            </div>
            <div className="text-center py-8">
              <p className="font-semibold text-lg">Anita Sandhvi</p>
              <p className="py-4">
                “Ceebo Healthmonk has simplified my life by delivering
                nutritious meals to my doorstep, saving me time and effort.”
              </p>
            </div>
            {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
          </div>
          <div className="bg-white rounded-3xl px-8 py-8 items-center">
            <div className="w-36">
              <img src="./images/CustomerTestimonials-2.png" alt="" />
            </div>
            <div className="text-center py-8">
              <p className="font-semibold text-lg">Harsh Mehta</p>
              <p className="py-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare..”
              </p>
            </div>
            {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
          </div>

          <div className="bg-white rounded-3xl px-8 py-8 items-center">
            <div className="w-36 ">
              <img src="./images/CustomerTestimonials-3.png" alt="" />
            </div>
            <div className="text-center py-8">
              <p className="font-semibold text-lg">Shrushti Nanda</p>
              <p className="py-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare..”
              </p>
            </div>
            {/* <div>
              <img src="./images/star-1.png" alt="" />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
